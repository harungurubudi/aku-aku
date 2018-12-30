import * as React from "react";
import styled from "../styledComponents";
import { getFontColor, getBackground } from "./getBackground";
import { connect } from "react-redux";
import { RootState } from "../../store";
import chroma from "chroma-js";

type ColorEnum = "red" | "yellow" | "blue" | "green" | "pink" | "grey";
export interface ButtonProps extends React.DOMAttributes<HTMLButtonElement> {
  fontColor?: ColorEnum;
  iconColor?: ColorEnum;
  background?: ColorEnum;
  isInvert?: boolean;
  isLast?: boolean;
  isBottom?: boolean;
  isDarkMode?: boolean;
}

const SCButton = styled.button<ButtonProps>``;
const Wrapper = styled(SCButton)`
  line-height: 1;
  position: relative;
  background: ${props => {
    if (props.isInvert) {
      return props.isDarkMode ? props.theme.white : props.theme.black;
    }
    return getBackground(
      props.background,
      props.theme,
      props.isDarkMode
        ? chroma(props.theme.black)
            .brighten(0.3)
            .hex()
        : chroma(props.theme.grey)
            .brighten(0.8)
            .hex()
    );
  }};
  color: ${props => {
    return getFontColor(
      props.fontColor,
      props.theme,
      props.background
        ? props.theme.white
        : props.isDarkMode
        ? props.theme.white
        : props.theme.black
    );
  }};
  box-shadow: 0px 3px 20px ${props =>
    props.isDarkMode
      ? chroma(props.theme.black)
          .darken(0.3)
          .alpha(0.4)
          .css()
      : chroma(props.theme.grey)
          .brighten(0.2)
          .alpha(0.4)
          .css()};
  font-family: ${props => props.theme.fontFamilyMonospace};
  /* color: ${props => props.theme.black}; */
  font-weight: bold;
  text-transform: uppercase;
  outline: none;
  padding: 8px 12px;
  cursor: pointer;
  margin-right: ${props => (props.isLast ? 0 : 12)}px;
  margin-bottom: ${props => (props.isBottom ? 0 : 12)}px;
  font-size: 14px;
  /* border: solid 2px ${props => props.theme.black}; */
  border: none;
  border-radius: 4px;

  .icon {
    margin-right: 5px;
    color: ${props => {
      return getFontColor(
        props.iconColor,
        props.theme,
        props.isInvert ? props.theme.black : props.theme.white
      );
    }};
  }

  &:hover {
    opacity: .9;
  }

  &:active {
    top: 1px;
  }
`;

const mapStateToProps = (state: RootState) => {
  return {
    isDarkMode: state.app.isDarkMode
  };
};

export const Button = connect(mapStateToProps)((props: ButtonProps) => {
  return <Wrapper {...props} />;
});
