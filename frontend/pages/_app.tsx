import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import GlobalStyle from "../styles/GlobalStyles";

import theme from "../themes/theme";

import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />

      <ToastContainer />
    </ThemeProvider>
  );
}

export default MyApp;
