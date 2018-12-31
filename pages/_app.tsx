import withRedux from "next-redux-wrapper";
import App, { Container, NextAppContext } from "next/app";

import * as React from "react";
import { Provider } from "react-redux";
import { Store } from "redux";

import "sanitize.css";

import { GlobalStyle } from "../components/GlobalStyle";
import { ThemeProvider } from "../components/styledComponents";
import { theme } from "../components/theme";
import { initStore } from "../store";

import NProgress from "next-nprogress/component";

interface AppContext {
  store: Store;
}
export default withRedux(initStore)(
  class MyApp extends App<AppContext> {
    static async getInitialProps({ Component, router, ctx }: NextAppContext) {
      let pageProps = {};

      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }

      return { pageProps };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Container>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <div>
                <GlobalStyle />
                <NProgress color={theme.red} options={{ showSpinner: false }} />
                <Component {...pageProps} />
              </div>
            </ThemeProvider>
          </Provider>
        </Container>
      );
    }
  }
);
