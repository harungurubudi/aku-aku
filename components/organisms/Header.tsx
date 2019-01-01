import styled from "../styledComponents";
import { Button } from "../atoms/Button";
import * as React from "react";
import Link from "next/link";

import LogoSrc from "../../static/devlover-logo.svg";
import { Avatar } from "../atoms/Avatar";

import { Pen } from "styled-icons/boxicons-regular/Pen";
import { Bell } from "styled-icons/boxicons-regular/Bell";
import { Envelope } from "styled-icons/boxicons-regular/Envelope";
import { RootState } from "../../store";
import { connect } from "react-redux";

import chroma from "chroma-js";
import { Input } from "../atoms";
import { Search } from "styled-icons/boxicons-regular";

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
  position: relative;
  z-index: 2;
  width: 100%;
  background: ${props =>
    props.isDarkMode
      ? chroma(props.theme.black)
          .brighten(0.3)
          .hex()
      : chroma(props.theme.grey)
          .brighten(0.8)
          .hex()};
  box-shadow: 0px 3px 20px
    ${props =>
      props.isDarkMode
        ? chroma(props.theme.black)
            .darken(0.1)
            .alpha(0.8)
            .css()
        : chroma(props.theme.grey)
            .brighten(0.7)
            .alpha(0.8)
            .css()};
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
  flex: 1;
  align-items: center;
  display: flex;
`;
const Logo = styled.img`
  width: 60px;
  height: 40px;
  object-fit: contain;
`;
const SCLogoText = styled.span<HeaderProps>``;
const LogoText = styled(SCLogoText)`
  margin: 0 10px;
  font-family: ${props => props.theme.fontFamilyMonospace};
  font-weight: bold;
  font-size: 20px;
  color: ${props => props.theme.fontColor(props.isDarkMode)};

  span {
    color: ${props => props.theme.red};
  }

  @media (max-width: 820px) {
    display: none;
  }
`;

const SCIcon = styled.span<HeaderProps>``;
const Icon = styled(SCIcon)`
  margin-right: 5px;
  padding: 5px;
  border-radius: 20px;
  color: ${props => props.theme.fontColor(props.isDarkMode)};
  opacity: 0.6;

  &:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.1);
  }
`;
const Icon2 = styled(Icon)`
  margin: 0;
`;

class HeaderComp extends React.Component<HeaderProps, HeaderState> {
  renderBeforeLogin() {
    return (
      <>
        {/* <Button background="red" isBottom isLast>
          <Pen className="icon" size={14} />
          Buat Artikel
        </Button> */}
        <Icon2 isDarkMode={this.props.isDarkMode}>
          <Envelope className="icon" size={24} />
        </Icon2>
        <Icon isDarkMode={this.props.isDarkMode}>
          <Bell className="icon" size={24} />
        </Icon>
        <Avatar size={32} username={"Wewe"} isBottom isLast />
      </>
    );
  }

  renderAfterLogin(user: { username: string } = { username: "" }) {
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
          <Section>
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
          </Section>
          <Section>
            <Input
              placeholder="Cari..."
              iconBefore={<Search className="icon" size={16} />}
              isBottom
              isFullWidth
            />
          </Section>
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
