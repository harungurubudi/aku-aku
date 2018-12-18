import App, { Container, NextAppContext } from "next/app";
import * as React from "react";
import "sanitize.css";
import { ThemeProvider } from "../components/styledComponents";
import { theme } from "../components/theme";
import { GlobalStyle } from "../components/GlobalStyle";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <div>
            <GlobalStyle />
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </Container>
    );
  }
}
