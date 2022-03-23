import styled from 'styled-components';

export const Container = styled.main`
  padding-bottom: 20px;
`;

export const Main = styled.main`
  max-width: 1645px;
  width: 100%;

  margin: 0 auto;
  padding: 0 20px;
`;

export const LoadingContainer = styled.main`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > span {
    color: #151515;
    font-size: 16px;

    font-weight: 600;

    margin-top: 8px;
  }
`;
