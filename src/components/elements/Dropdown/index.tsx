import { FC, useCallback, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

import { Container } from './styles';
import { IDropdown } from './interfaces';

export const Dropdown: FC<IDropdown> = ({ children, title }) => {
  const [isDropped, setIsDropped] = useState<boolean | undefined>(undefined);

  // Animate dropdown
  const handleOpenDropdown = useCallback(() => {
    setIsDropped(oldState => {
      if (oldState === undefined) {
        return true;
      }
      
      return !oldState;
    });
  }, []);

  return (
    <Container isDropped={isDropped}>
      <header onClick={handleOpenDropdown}>
        <h1>{title}</h1>

        <FiChevronDown size={40} />
      </header>

      <main>
        {children}
      </main>
    </Container>
  );
};
