import * as React from "react";
import styled from "../styledComponents";
import { getFontColor } from "./getBackground";
import { connect } from "react-redux";
import { RootState } from "../../store";

export interface ButtonProps extends React.DOMAttributes<HTMLButtonElement> {
  // children: React.ReactChild | React.ReactChild[];
  fontColor?: "red" | "yellow" | "blue" | "green" | "pink" | "grey" | "black";
  iconColor?: "red" | "yellow" | "blue" | "green" | "pink" | "grey" | "black";
  isInvert?: boolean;
  isLast?: boolean;
  isBottom?: boolean;
  isDarkMode?: boolean;
}

const SCButton = styled.button<ButtonProps>``;
const Wrapper = styled(SCButton)`
  position: relative;
  background: ${props =>
    props.isDarkMode ? `rgba(255,255,255,.1)` : `rgba(0,0,0,.1)`};
  color: ${props => {
    return getFontColor(
      props.fontColor,
      props.theme,
      props.isDarkMode ? props.theme.white : props.theme.black
    );
  }};
  font-family: ${props => props.theme.fontFamilyMonospace};
  /* color: ${props => props.theme.black}; */
  font-weight: bold;
  text-transform: uppercase;
  outline: none;
  padding: 8px 12px;
  cursor: pointer;
  /* box-shadow: 3px 3px 0 ${props => props.theme.black}; */
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
