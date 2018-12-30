import { createGlobalStyle } from "./styledComponents";
import { connect } from "react-redux";
import { RootState } from "../store";
import chroma from "chroma-js";

// export const Style = createGlobalStyle`
export const Style = createGlobalStyle<{ isDarkMode: boolean }>`

  body {
    font-family: ${props => props.theme.fontFamilySansSerif};
    color: ${props => props.theme.fontColor(props.isDarkMode)};
    background-color: ${props => props.theme.background(props.isDarkMode)};
    line-height: 1.5;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  .editor {
    height: 100%;

    .CodeMirror {
      height: 100%;
      font-size: 14px;
      line-height: 1.5;
    }
  }

  .github-button {
    position: relative;
    background: ${props =>
      props.isDarkMode ? `rgba(255,255,255,.1)` : `rgba(0,0,0,.1)`};
    color: ${props =>
      props.isDarkMode ? props.theme.white : props.theme.black};
    font-family: ${props => props.theme.fontFamilyMonospace};
    font-weight: bold;
    text-transform: uppercase;
    outline: none;
    padding: 8px 12px;
    cursor: pointer;

    font-size: 14px;
    /* border: solid 2px ${props => props.theme.black}; */
    border: none;
    border-radius: 4px;

    margin-bottom: 12px;

    .icon {
      margin-right: 5px;
      color: ${props =>
        props.isDarkMode ? props.theme.white : props.theme.black};
    }

    &:hover {
      opacity: .9;
    }

    &:active {
      top: 1px;
    }
  }

  /* CODEMIRROR THEME */
  /* ONE DARK */

  .cm-s-devlover {
    font-family: ${props => props.theme.fontFamilyMonospace};
    color: ${props => props.theme.fontColor(props.isDarkMode)};
    background-color: ${props => props.theme.background(props.isDarkMode)};
    .CodeMirror-selected {
      background-color: ${props =>
        props.isDarkMode
          ? chroma(props.theme.blue)
              .darken()
              .hex()
          : chroma(props.theme.blue)
              .brighten()
              .hex()};
    }
    .CodeMirror-gutter,
    .CodeMirror-gutters {
      border: none;
      background-color: rgba(0,0,0,.1);
    }
    .CodeMirror-linenumber,
    .CodeMirror-linenumbers {
      color: ${props => props.theme.grey} !important;
      background-color: transparent;
    }
    .CodeMirror-lines {
      color: ${props => props.theme.fontColor(props.isDarkMode)} !important;
      background-color: transparent;
    }
    .CodeMirror-cursor {
      border-left: 2px solid ${props => props.theme.blue} !important;
    }
    /* addon: edit/machingbrackets.js & addon: edit/matchtags.js */
    .CodeMirror-matchingbracket,
    .CodeMirror-matchingtag {
      border-bottom: 2px solid ${props => props.theme.blue};
      color: ${props => props.theme.fontColor(props.isDarkMode)} !important;
      background-color: transparent;
    }
    .CodeMirror-nonmatchingbracket {
      border-bottom: 2px solid ${props => props.theme.red};
      color: ${props => props.theme.fontColor(props.isDarkMode)} !important;
      background-color: transparent;
    }
    /* addon: fold/foldgutter.js */
    .CodeMirror-foldmarker,
    .CodeMirror-foldgutter,
    .CodeMirror-foldgutter-open,
    .CodeMirror-foldgutter-folded {
      border: none;
      text-shadow: none;
      color: ${props => props.theme.grey} !important;
      background-color: transparent;
    }
    /* addon: selection/active-line.js */
    .CodeMirror-activeline-background {
      background-color: rgba(153, 187, 255, 0.04);
    }
    /* basic syntax */
    .cm-header {
      color: ${props => props.theme.red};
    }
    .cm-quote {
      color: ${props => props.theme.grey};
      font-style: italic;
    }
    .cm-negative {
      color: ${props => props.theme.red};
    }
    .cm-positive {
      color: ${props => props.theme.red};
    }
    .cm-strong {
      color: ${props => props.theme.yellow};
      font-weight: bold;
    }
    .cm-header .cm-strong {
      color: ${props => props.theme.yellow};
      font-weight: bold;
    }
    .cm-em {
      color: ${props => props.theme.pink};
      font-style: italic;
    }
    .cm-header .cm-em {
      color: ${props => props.theme.pink};
      font-style: italic;
    }
    .cm-tag {
      color: ${props => props.theme.red};
    }
    .cm-attribute {
      color: ${props => props.theme.yellow};
    }
    .cm-link {
      color: ${props => props.theme.green};
      border-bottom: solid 1px ${props => props.theme.green};
    }
    .cm-builtin {
      color: ${props => props.theme.red};
    }
    .cm-keyword {
      color: ${props => props.theme.pink};
    }
    .cm-def {
      color: ${props => props.theme.yellow};
    } /* original:  ${props => props.theme.yellow}; */
    .cm-atom {
      color: ${props => props.theme.yellow};
    }
    .cm-number {
      color: ${props => props.theme.yellow};
    }
    .cm-property {
      color: ${props => props.theme.blue};
    }
    .cm-qualifier {
      color: ${props => props.theme.yellow};
    }
    .cm-variable {
      color: ${props => props.theme.red};
    }
    .cm-string {
      color: ${props => props.theme.green};
    }
    .cm-punctuation {
      color: ${props => props.theme.fontColor(props.isDarkMode)};
    }
    .cm-operator {
      color: ${props => props.theme.blue};
    } /* original: ${props => props.theme.fontColor(props.isDarkMode)} */
    .cm-meta {
      color: ${props => props.theme.fontColor(props.isDarkMode)};
    }
    .cm-bracket {
      color: ${props => props.theme.fontColor(props.isDarkMode)};
    }
    .cm-comment {
      color: ${props => props.theme.grey};
      font-style: italic;
    }
    .cm-error {
      color: ${props => props.theme.red};
    }
    /* css syntax corrections */
    .cm-m-css.cm-variable {
      color: ${props => props.theme.grey};
    }
    .cm-m-css.cm-property {
      color: ${props => props.theme.fontColor(props.isDarkMode)};
    }
    .cm-m-css.cm-atom {
      color: ${props => props.theme.blue};
    }
    .cm-m-css.cm-builtin {
      color: ${props => props.theme.blue};
    }
    /* lua syntax corrections */
    .cm-m-lua.cm-variable {
      color: ${props => props.theme.blue};
    }
  }
`;

const mapStateToProps = (state: RootState) => {
  return {
    isDarkMode: state.app.isDarkMode
  };
};

export const GlobalStyle = connect(mapStateToProps)(Style);
