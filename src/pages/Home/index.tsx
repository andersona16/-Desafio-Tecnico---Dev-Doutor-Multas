import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';

import { IBike, ICar, ITruck } from './interfaces';
import { Header } from '../../components/elements/Header';
import { Container, LoadingContainer, Main } from './styles';
import { api } from '../../services/api';
import { Dropdown } from '../../components/elements/Dropdown';

export const Home: FC = () => {
  const [trucks, setTrucks] = useState<IBike[]>();
  const [bikes, setBikes] = useState<ICar[]>();
  const [cars, setCars] = useState<ITruck[]>();

  const apiTimeDelay = useMemo(() => 2000, []);

  // Load everything in one time
  // Load cars
  useEffect(() => {
    async function loadCarsFromApi() {
      const { data } = await api.get<ICar[]>('/carros/marcas');

      const parsedData = data.sort((a, b) => {
        return (b.nome.toLowerCase() > a.nome.toLowerCase()) ? 1 : ((a.nome.toLowerCase() > b.nome.toLowerCase()) ? -1 : 0);
      });

      setCars(parsedData);
    }

    const timer = setTimeout(() => loadCarsFromApi(), apiTimeDelay);

    return () => clearInterval(timer);
  }, [apiTimeDelay]);

  // Load trucks
  useEffect(() => {
    async function loadTrucksFromApi() {
      const { data } = await api.get<ITruck[]>('/caminhoes/marcas');

      const parsedData = data.sort((a, b) => {
        return (b.nome.toLowerCase() > a.nome.toLowerCase()) ? 1 : ((a.nome.toLowerCase() > b.nome.toLowerCase()) ? -1 : 0);
      });

      setTrucks(parsedData);
    }

    const timer = setTimeout(() => loadTrucksFromApi(), apiTimeDelay);

    return () => clearInterval(timer);
  }, [apiTimeDelay]);

  // Load bikes
  useEffect(() => {
    async function loadBikesFromApi() {
      const { data } = await api.get<IBike[]>('/motos/marcas');

      const parsedData = data.sort((a, b) => {
        return (b.nome.toLowerCase() > a.nome.toLowerCase()) ? 1 : ((a.nome.toLowerCase() > b.nome.toLowerCase()) ? -1 : 0);
      });

      setBikes(parsedData);
    }

    const timer = setTimeout(() => loadBikesFromApi(), apiTimeDelay);

    return () => clearInterval(timer);
  }, [apiTimeDelay]);

  const handleGetInfo = useCallback(async (modelId: string) => {
    const { data } = await api.get(`/carros/marcas/${modelId}/modelos`);

    console.log(data);
  }, []);

  return (
    <>
      {!trucks || !cars || !bikes ? (
        <LoadingContainer>
          <TailSpin color="#0B3A5E" width={50} height={50} />
          <span>Carregando dados... Por favor, aguarde!</span>
        </LoadingContainer>
      ) : (
        <Container>
          <Header />

          <Main>
            <Dropdown title="Carros">
              {cars.map(({ codigo, nome }) => (
                <span key={codigo} onClick={() => handleGetInfo(codigo)}>{nome}</span>
              ))}
            </Dropdown>

            <Dropdown title="Motos">
              {bikes.map(({ codigo, nome }) => (
                <span key={codigo}>{nome}</span>
              ))}
            </Dropdown>

            <Dropdown title="Caminhões">
              {trucks.map(({ codigo, nome }) => (
                <span key={codigo}>{nome}</span>
              ))}
            </Dropdown>
          </Main>
        </Container>
      )}
    </>
  );
}
