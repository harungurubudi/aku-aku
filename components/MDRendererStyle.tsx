import { css } from "./styledComponents";
import chroma from "chroma-js";
/* CODEMIRROR THEME */
/* ONE DARK */
export const RendererStyle = css<{ isDarkMode: boolean }>`
  .renderer {
    // CONTAINER
    max-width: 600px;
    padding: 20px;
    margin: 0 auto;

    // UTILS

    h1 {
      font-size: 32px;
      font-family: ${props => props.theme.fontFamilyMonospace};
      margin-bottom: 0;
      line-height: 1.2;
    }
    h2 {
      font-family: ${props => props.theme.fontFamilySansSerif};
      margin-bottom: 0;
      font-size: 24px;
      line-height: 1.2;
    }
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.2;
      font-size: 20px;
      opacity: 0.6;
      font-family: ${props => props.theme.fontFamilyMonospace};
      margin-bottom: 0;
    }

    //PARAGRAPH
    p {
      margin-top: 0;
      margin-bottom: 20px;
      opacity: 0.8;
      &.hang-two {
        text-indent: -0.45em;
      }

      code {
        padding: 2px 5px;
        font-size: 14px;
        border-radius: 4px;
        // color:
        background: ${props =>
          chroma(props.theme.yellow)
            .brighten()
            .alpha(0.4)
            .css()};
      }
    }

    // CODE BLOCK
    pre.pre-highlight {
      font-size: 14px;
      margin-bottom: 20px;
      background: ${props =>
        props.isDarkMode
          ? chroma(props.theme.black)
              .brighten(0.2)
              .hex()
          : chroma(props.theme.grey)
              .brighten(0.99)
              .hex()};
      box-shadow: 0px 3px 20px
        ${props =>
          props.isDarkMode
            ? chroma(props.theme.black)
                .alpha(0.4)
                .css()
            : chroma(props.theme.grey)
                .brighten(0.2)
                .alpha(0.4)
                .css()};
    }
  }
`;
