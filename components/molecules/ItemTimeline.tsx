import * as React from "react";
import styled from "../styledComponents";
import { ItemHead } from "./ItemHead";
import { ItemActions } from "./ItemActions";
import { Button } from "../atoms";

const Wrapper = styled.div`
  display: flex;
  padding: 20px 0;
  padding-right: 20px;
`;
const Title = styled.h3`
  line-height: 1.2;
  font-size: 20px;
  margin: 0;
`;
const Content = styled.div`
  /* padding-left: 36px; */
`;

const Description = styled.p`
  opacity: 0.6;
  margin: 5px 0;
  line-height: 1.4;
  margin-bottom: 10px;
`;
const LeftSection = styled.div`
  flex: 1;
`;
const RightSection = styled.div`
  width: 140px;
  margin-left: 20px;
  flex: 0 0 auto;

  img {
    width: 100%;
    height: 120px;
    border-radius: 4px;
    object-fit: cover;
  }
`;

const Tag = styled.span<{ color: string }>`
  font-family: ${props => props.theme.fontFamilyMonospace};
  font-size: 12px;
  font-weight: bold;
  margin-right: 10px;
  color: ${props => props.theme[props.color] || "inherit"};
`;

export interface ItemTimelineProps {
  key: string | number;
  title: string;
  description: string;
  cover?: string;
}
export interface ItemTimelineState {}

export class ItemTimeline extends React.Component<
  ItemTimelineProps,
  ItemTimelineState
> {
  public render() {
    const { title, description, cover } = this.props;
    const tags = { GraphQL: "pink", MongoDB: "green", NodeJS: "" };
    return (
      <Wrapper>
        <LeftSection>
          <Content>
            <div>
              {Object.keys(tags).map(tag => (
                <Tag color={tags[tag]}>{tag}</Tag>
              ))}
            </div>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Content>
          <ItemHead />
          {/* <ItemActions /> */}
        </LeftSection>
        {cover && (
          <RightSection>
            <img src={cover} />
          </RightSection>
        )}
      </Wrapper>
    );
  }
}
