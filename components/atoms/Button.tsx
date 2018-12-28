import * as React from "react";
import styled from "../styledComponents";
import { ThemeInterface } from "../theme";
import { getFontColor } from "./getBackground";

export interface ButtonProps {
  children: React.ReactChild | React.ReactChild[];
  fontColor?: "red" | "yellow" | "blue" | "green" | "pink" | "grey" | "black";
  iconColor?: "red" | "yellow" | "blue" | "green" | "pink" | "grey" | "black";
  isInvert?: boolean;
  isLast?: boolean;
  isBottom?: boolean;
}

const SCButton = styled.button<ButtonProps>``;
const Wrapper = styled(SCButton)`
  position: relative;
  background: ${props =>
    props.isInvert ? props.theme.white : props.theme.black};
  color: ${props => {
    return getFontColor(
      props.fontColor,
      props.theme,
      props.isInvert ? props.theme.black : props.theme.white
    );
  }};
  border: none;
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
  border: solid 2px ${props => props.theme.black};
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

export const Button = (props: ButtonProps) => {
  return (
    <Wrapper
      fontColor={props.fontColor}
      iconColor={props.iconColor}
      isInvert={props.isInvert}
      isLast={props.isLast}
      isBottom={props.isBottom}
    >
      {props.children}
    </Wrapper>
  );
};
