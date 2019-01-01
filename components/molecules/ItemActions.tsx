import * as React from "react";

import styled from "../styledComponents";
import { Avatar, Button } from "../atoms";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export interface ItemActionsProps {}
export interface ItemActionsState {}

export class ItemActions extends React.Component<
  ItemActionsProps,
  ItemActionsState
> {
  public render() {
    return (
      <Wrapper>
        <Button size="small" isUpperCase={false}>
          Suka
        </Button>
        <Button size="small" isUpperCase={false}>
          Simpan
        </Button>
      </Wrapper>
    );
  }
}
