import * as React from "react";

import styled from "../styledComponents";

const Wrapper = styled.div``;

export interface DropdownProps {
  children?: React.ReactNode;
}
export interface DropdownState {
  children?: React.ReactNode;
}

export default class Dropdown extends React.Component<
  DropdownProps,
  DropdownState
> {
  public render() {
    return <div />;
  }
}
