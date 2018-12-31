import { css } from "./styledComponents";
import chroma from "chroma-js";
/* CODEMIRROR THEME */
/* ONE DARK */
export const EditorStyle = css<{ isDarkMode: boolean }>`
.cm-s-devlover {
  font-family: ${props => props.theme.fontFamilyMonospace};
  color: ${props => props.theme.fontColor(props.isDarkMode)};
  background-color: ${props =>
    props.isDarkMode
      ? chroma(props.theme.black)
          .brighten(0.2)
          .hex()
      : chroma(props.theme.grey)
          .brighten(0.99)
          .hex()};
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
  }
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
