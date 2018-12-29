import styled from "../styledComponents";
import { Button } from "../atoms/Button";
import * as React from "react";
import Link from "next/link";

import LogoSrc from "../../static/devlover-logo.svg";
import { Avatar } from "../atoms/Avatar";

import { Pencil } from "styled-icons/boxicons-solid/Pencil";
import { RootState } from "../../store";
import { connect } from "react-redux";

export interface HeaderProps {
  isDarkMode?: boolean;
  isLogin?: boolean;
  user?: {
    username: string;
  };
  children?: React.ReactChild | React.ReactChild[];
}

interface HeaderState {
  showModalRegister: boolean;
  showModalLogin: boolean;
}

const SCHeader = styled.header<HeaderProps>``;
const Wrapper = styled(SCHeader)`
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
`;
const Container = styled.div`
  max-width: ${props => props.theme.containerWidth}px;
  margin: 0 auto;
  height: 50px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Section = styled.div`
  align-items: center;
  display: flex;
`;
const Logo = styled.img`
  width: 60px;
  height: 40px;
  object-fit: contain;
`;
const SCLogoText = styled.header<HeaderProps>``;
const LogoText = styled(SCLogoText)`
  margin: 0 10px;
  font-family: ${props => props.theme.fontFamilyMonospace};
  font-weight: bold;
  font-size: 20px;
  color: ${props => props.theme.fontColor(props.isDarkMode)};

  span {
    color: ${props => props.theme.red};
  }
`;

class HeaderComp extends React.Component<HeaderProps, HeaderState> {
  renderBeforeLogin() {
    return (
      <>
        <Button iconColor="green" isInvert isBottom>
          <Pencil className="icon" size={16} />
          Buat post
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
      <Wrapper isDarkMode={this.props.isDarkMode}>
        <Container>
          <Link href="/">
            <a>
              <Section>
                <Logo src={logoSrc} />
                <LogoText isDarkMode={this.props.isDarkMode}>
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

const mapStateToProps = (state: RootState) => {
  return {
    isDarkMode: state.app.isDarkMode
  };
};

export const Header = connect(mapStateToProps)(HeaderComp);
