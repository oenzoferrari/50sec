import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import UserProvider from "../contexts/User";
import RoutingProvider from "../contexts/Routing";

import theme from "../themes/theme";

import GlobalStyle from "../styles/GlobalStyles";

import "react-toastify/dist/ReactToastify.css";
import "react-activity/lib/Dots/Dots.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <GlobalStyle />
      <UserProvider>
        <RoutingProvider>
          <Component {...pageProps} />
        </RoutingProvider>
      </UserProvider>

      <ToastContainer />
    </ThemeProvider>
  );
}

export default MyApp;
