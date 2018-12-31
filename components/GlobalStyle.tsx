import { createGlobalStyle, css } from "./styledComponents";
import { connect } from "react-redux";
import { RootState } from "../store";

import { EditorStyle } from "./MDEditorStyle";
import { RendererStyle } from "./MDRendererStyle";

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
    line-height: 1;
    position: relative;
    background: ${props =>
      props.isDarkMode ? props.theme.white : props.theme.black};
    color: ${props =>
      props.isDarkMode ? props.theme.black : props.theme.white};
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

  ${RendererStyle}
  ${EditorStyle}

`;

const mapStateToProps = (state: RootState) => {
  return {
    isDarkMode: state.app.isDarkMode
  };
};

export const GlobalStyle = connect(mapStateToProps)(Style);
