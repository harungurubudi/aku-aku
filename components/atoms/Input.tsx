import * as React from "react";
import styled from "../styledComponents";
import chroma from "chroma-js";
import { connect } from "react-redux";
import { RootState } from "../../store";

interface InputProps {
  background?: "red" | "yellow" | "blue" | "green";
  // label?: string;
  value?: string | number;
  placeholder?: string;
  onChange?: () => void;
  type?: string;
  // tslint:disable-next-line:no-any
  ref?: any;
  isBottom?: boolean;
  // tslint:disable-next-line:no-any
  iconBefore?: any;
  isFullWidth?: boolean;
  isDarkMode?: boolean;
}

const SCInput = styled.input<InputProps>``;
const Wrapper = styled(SCInput)`
  padding: 5px 12px;
  padding-left: ${props => (props.iconBefore ? 32 : 12)}px;
  /* padding-top: 16px; */
  outline: none;
  /* border: none; */
  width: ${props => (props.isFullWidth ? "100%" : "auto")};
  border: solid 1px
    ${props =>
      props.isDarkMode
        ? chroma(props.theme.black)
            .brighten(0.2)
            .hex()
        : chroma(props.theme.grey)
            .brighten(0.8)
            .hex()};
  position: relative;
  border-radius: 7px;
  background: ${props =>
    props.isDarkMode
      ? chroma(props.theme.black)
          .brighten(0.65)
          .hex()
      : chroma(props.theme.grey)
          .brighten(0.95)
          .hex()};
  color: ${props => (props.isDarkMode ? props.theme.white : props.theme.black)};
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
  font-size: 16px;
  margin-bottom: ${props => (props.isBottom ? 0 : 16)}px;
`;

const mapStateToProps = (state: RootState) => {
  return {
    isDarkMode: state.app.isDarkMode
  };
};

export const Input = connect(mapStateToProps)((props: InputProps) => {
  return (
    <span
      style={{
        position: "relative",
        width: props.isFullWidth ? "100%" : "auto"
      }}
    >
      <Wrapper
        ref={props.ref}
        type={props.type}
        background={props.background}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        isBottom={props.isBottom}
        iconBefore={props.iconBefore}
        isFullWidth={props.isFullWidth}
        isDarkMode={props.isDarkMode}
      />
      {props.iconBefore ? (
        <span style={{ position: "absolute", left: 8, top: 5 }}>
          {props.iconBefore}
        </span>
      ) : null}
    </span>
  );
});
