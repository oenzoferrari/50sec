import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.background};
    font-family: Open Sans;
    box-sizing: border-box
  }

  * {
    margin: 0;
    padding: 0;    
  }
`;

export default GlobalStyle;
