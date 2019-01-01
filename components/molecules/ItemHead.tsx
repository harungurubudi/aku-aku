import * as React from "react";

import styled from "../styledComponents";
import { Avatar } from "../atoms";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 14px;
`;
const Name = styled.span`
  margin-right: 5px;
  line-height: 1;
  strong {
    color: ${props => props.theme.blue};
    font-weight: bold;
  }
  div {
    font-weight: normal;
    color: inherit;
    opacity: 0.6;
  }
`;
const Date = styled.span`
  margin-right: 5px;
  margin-left: 5px;
  opacity: 0.6;
  font-size: 12px;
  font-family: ${props => props.theme.fontFamilyMonospace};
`;
const Divider = styled.div`
  opacity: 0.3;
`;

export interface ItemHeadProps {}
export interface ItemHeadState {}

export class ItemHead extends React.Component<ItemHeadProps, ItemHeadState> {
  public render() {
    return (
      <Wrapper>
        <Avatar size={24} isBottom />
        <Name>
          <strong>Kalengium Unicode</strong>
          {/* <div>Programmer kaleng kaleng</div> */}
        </Name>
        <Divider>/</Divider>
        <Date>22 Jan 2019</Date>
        {/* <Divider>/</Divider>
        <Date>4 min read</Date> */}
      </Wrapper>
    );
  }
}
