import styled, { css } from 'styled-components';

interface IContainer {
  isDropped: boolean | undefined;
}

export const Container = styled.div<IContainer>`
  max-width: 75%;
  width: 100%;
  margin: 0 auto;

  border-radius: 5px;

  @keyframes animateUp {
    0% {
      height: 350px;
    }
    
    100% {
      height: 0;
    }
  }

  @keyframes animateDown {
    0% {
      height: 0;
    }

    100% {
      height: 350px;
    }
  }

  & + * {
    margin-top: 20px;
  }

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 20px;

    color: #151515;

    padding: 20px;

    background-color: var(--blue-indigo);

    border-radius: 5px;

    cursor: pointer;

    > h1 {
      color: white;
      font-weight: 600;
    }

    > svg {
      ${props => props.isDropped && (
        css`
          transform: rotate(180deg);
        `
      )}

      color: white;

      transition: transform 1.5s;
    }
  }

  > main {
    ${props => props.isDropped === true && (
      css`
        animation: animateDown 1s linear forwards;
      `
    )}

    ${props => props.isDropped === false && (
      css`
        animation: animateUp 1s linear forwards;
      `
    )}

    height: 0;
    max-height: 350px;

    overflow: auto;

    display: flex;
    flex-direction: column;

    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;

    padding: 0 20px;

    > span {
      color: var(--blue-indigo);

      font-size: 18px;
      font-weight: 400;

      &:nth-child(1) {
        margin-top: 20px;
      }

      & + * {
        margin-top: 8px;
      }
    }
  }
`;