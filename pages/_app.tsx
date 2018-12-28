import App, { Container, NextAppContext } from "next/app";
import * as React from "react";
import "sanitize.css";
import { ThemeProvider } from "../components/styledComponents";
import { theme } from "../components/theme";
import { GlobalStyle } from "../components/GlobalStyle";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { initStore } from "../store";
import { Store } from "redux";

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
          <ThemeProvider theme={theme}>
            <div>
              <GlobalStyle />
              <Provider store={store}>
                <Component {...pageProps} />
              </Provider>
            </div>
          </ThemeProvider>
        </Container>
      );
    }
  }
);
