import * as React from "react";
import styled from "../styledComponents";
import { ThemeInterface } from "../theme";
import { getBackground } from "./getBackground";

interface InputProps {
  background?: "red" | "yellow" | "blue" | "green";
  label?: string;
  value?: string | number;
  placeholder?: string;
  onChange?: () => void;
  type?: string;
  // tslint:disable-next-line:no-any
  ref?: any;
}

const SCInput = styled.input<InputProps>``;
const Wrapper = styled(SCInput)`
  padding: 5px 10px;
  padding-top: 16px;
  outline: none;
  border: solid 2px ${props => props.theme.black};
  position: relative;
  border-radius: 4px;
  /* background: ${props => props.theme.grey}; */
  border-color: ${(props: { background: string; theme: ThemeInterface }) =>
    getBackground(props.background, props.theme)};
  font-size: 16px;
  margin-bottom: 16px;
`;
const Label = styled.label`
  position: absolute;
  top: -18px;
  left: 0px;
  font-size: 11px;
  line-height: 1;
  width: 100%;
  font-family: ${props => props.theme.fontFamilyMonospace};
  font-weight: bold;
  text-transform: uppercase;
  padding: 4px 12px;
  color: ${props => props.theme.fontColor()};
`;

export const Input = (props: InputProps) => {
  return (
    <span style={{ position: "relative" }}>
      <Wrapper
        ref={props.ref}
        type={props.type}
        background={props.background}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      <Label>{props.label}</Label>
    </span>
  );
};
