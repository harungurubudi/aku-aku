import styled from "../styledComponents";
import { Button } from "../atoms/Button";
import * as React from "react";

export interface HeaderProps {
  isLogin?: boolean;
  children?: React.ReactChild | React.ReactChild[];
}

const Wrapper = styled.header`
  width: 100%;
  border-bottom: solid 1px ${props => props.theme.bgGrey};
`;
const Container = styled.div`
  max-width: ${props => props.theme.containerWidth}px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Section = styled.div`
  display: flex;
`;

export const Header = (props: HeaderProps) => {
  return (
    <Wrapper>
      <Container>
        <Section>Hello</Section>
        {!props.isLogin ? (
          <Section>
            <Button background="green" isBottom>
              Login
            </Button>
            <Button background="red" isBottom>
              Register
            </Button>
          </Section>
        ) : (
          <Section>is login</Section>
        )}
      </Container>
    </Wrapper>
  );
};
