import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.background};
    box-sizing: border-box
  }

  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;    
  }
`;

export default GlobalStyle;
