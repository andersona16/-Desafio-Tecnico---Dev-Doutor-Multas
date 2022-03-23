import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue-indigo: #0B3A5E;
  }

  * { 
    margin: 0;
    padding: 0;
    outline: 0; 
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Source Sans Pro', sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    background-color: transparent;
    font-weight: 700;
    border: 0;
  }
`;
