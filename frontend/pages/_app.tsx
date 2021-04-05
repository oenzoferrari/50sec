import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyles";

import theme from "../themes/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
