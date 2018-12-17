import * as React from "react";
import styled from "../styledComponents";
import { ThemeInterface } from "../theme";

export interface ButtonProps {
  background?: "red" | "yellow" | "blue" | "green";
  children: React.ReactChild;
  isLast?: boolean;
  isBottom?: boolean;
}

const getButtonBackground = (background?: string, theme?: ThemeInterface) => {
  if (background) {
    return theme[
      `bg${background.charAt(0).toUpperCase() + background.slice(1)}`
    ];
  }
  return theme.bgGrey;
};

const SCButton = styled.button<ButtonProps>``;
const Wrapper = styled(SCButton)`
  position: relative;
  background: ${(props: { background: string; theme: ThemeInterface }) =>
    getButtonBackground(props.background, props.theme)};
  /* color: ${props => props.theme.fontColor}; */
  border: none;
  font-family: ${props => props.theme.fontFamilyMonospace};
  font-weight: bold;
  text-transform: uppercase;
  outline: none;
  padding: 4px 12px 3px;
  cursor: pointer;
  box-shadow: 3px 3px 0 ${props => props.theme.fontColor};
  margin-right: 12px;
  margin-bottom: ${props => (props.isBottom ? 0 : 12)}px;
  font-size: 16px;

  &:hover {
    top: -1px;
    left: -1px;
    box-shadow: 4px 4px 0 ${props => props.theme.fontColor};
  }

  &:active {
    top: 1px;
  }
`;

export const Button = (props: ButtonProps) => {
  return (
    <Wrapper
      background={props.background}
      isLast={props.isLast}
      isBottom={props.isBottom}
    >
      {props.children}
    </Wrapper>
  );
};
