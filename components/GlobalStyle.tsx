import { createGlobalStyle } from "./styledComponents";
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fontFamilySansSerif};
    color: ${props => props.theme.fontColor()};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  .editor {
    .CodeMirror {
      padding: 20px;
      font-size: 16px;
      line-height: 1.5;
    }
  }
`;
