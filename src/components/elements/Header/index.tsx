import { Main, Principal } from './styles';
import logo from '../../../assets/img/logo.svg';
import manImage from '../../../assets/img/imagem_principal.svg';

export const Header = () => {
  return (
    <>
      <Principal>
        <img src={logo} alt="description" />
      </Principal>

      <Main>
        <img src={manImage} alt="description" />
        <div>
          <h3>Pesquise aqui o</h3>

          <h2>seu veiculo</h2>
        </div>
      </Main>
    </>
  );
};
