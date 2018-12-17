import styled from "../styledComponents";
import { Button } from "../atoms/Button";
import * as React from "react";
import Link from "next/link";

import LogoSrc from "../../static/devlover-logo.svg";
import { Avatar } from "../atoms/Avatar";
export interface HeaderProps {
  isLogin?: boolean;
  user?: object;
  children?: React.ReactChild | React.ReactChild[];
}

interface HeaderState {
  showModalRegister: boolean;
  showModalLogin: boolean;
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
  align-items: center;
  display: flex;
`;
const Logo = styled.img`
  width: 36px;
  height: 32px;
  object-fit: cover;
`;
const LogoText = styled.h1`
  margin: 0 10px;
  font-family: ${props => props.theme.fontFamilyMonospace};
  font-weight: bold;
  font-size: 20px;

  span {
    color: ${props => props.theme.colorRed};
  }
`;

export class Header extends React.Component<HeaderProps, HeaderState> {
  renderBeforeLogin() {
    return (
      <>
        <Button background="green" isBottom>
          Login
        </Button>
        <Button background="red" isBottom isLast>
          Register
        </Button>
      </>
    );
  }

  renderAfterLogin(user: { username: string }) {
    return (
      <>
        <Avatar username={user.username} isBottom isLast />
      </>
    );
  }

  render() {
    const logoSrc = LogoSrc;
    return (
      <Wrapper>
        <Container>
          <Link href="/">
            <a>
              <Section>
                <Logo src={logoSrc} />
                <LogoText>
                  DEV<span>LOVER</span>.ID
                </LogoText>
              </Section>
            </a>
          </Link>
          <Section
            style={{
              justifyContent: "flex-end"
            }}
          >
            {this.props.isLogin
              ? this.renderAfterLogin(this.props.user)
              : this.renderBeforeLogin()}
          </Section>
        </Container>
      </Wrapper>
    );
  }
}
