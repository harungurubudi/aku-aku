import { createGlobalStyle } from "./styledComponents";
export const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.fontColor};
    font-family: ${props => props.theme.fontFamilySansSerif};
    background-image: radial-gradient(circle, rgb(215, 215, 215), rgb(215, 215, 215) 1px, rgb(255, 255, 255) 1px, rgb(255, 255, 255));
    background-size: 28px 28px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
