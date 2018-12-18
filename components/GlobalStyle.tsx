import { createGlobalStyle } from "./styledComponents";
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fontFamilySansSerif};
    color: ${props => props.theme.fontColor};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
