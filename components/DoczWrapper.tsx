import * as React from "react";
import "sanitize.css";
import { ThemeProvider } from "./styledComponents";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";

interface Props {
  children: React.ReactChild;
}

const DoczWrapper = (props: Props) => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      {props.children}
    </div>
  </ThemeProvider>
);

export default DoczWrapper;
