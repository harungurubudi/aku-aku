import * as React from "react";

import chroma from "chroma-js";
import { theme } from "../theme";
import { Container, Button } from "../atoms";
import GitHubLogin from "react-github-login";
import { RootState } from "../../store";
import { BaseAction } from "../../store/utils";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { authGithub } from "../../store/Auth";

import styled from "../styledComponents";

import { CodeBlock } from "styled-icons/boxicons-regular/CodeBlock";
import { Code } from "styled-icons/material";

const SCWrapper = styled.div<{ isDarkMode: boolean }>``;
const Wrapper = styled(SCWrapper)`
  padding: 10px 0;
  background: ${props =>
    props.isDarkMode
      ? chroma(props.theme.black)
          .brighten(0.2)
          .hex()
      : chroma(props.theme.grey)
          .brighten(1.2)
          .hex()};
`;

const Title = styled.h1`
  margin: 0;
  font-family: ${props => props.theme.fontFamilyMonospace};

  span {
    color: ${props => props.theme.red};
  }
`;

const Subtitle = styled.p`
  margin-top: 0;

  em {
    opacity: 1;
    font-size: 1.1em;
    color: ${props => props.theme.blue};
    font-family: ${props => props.theme.fontFamilyMonospace};
    font-weight: bold;
  }
  span {
    opacity: 0.6;
  }
`;

const Section = styled.div`
  flex: 1;
`;

interface LandingProps {
  isDarkMode: boolean;
  authGithub: (githubAuthCode: string) => void;
}

const mapStateToProps = (state: RootState) => {
  return {
    isDarkMode: state.app.isDarkMode,
    loading: state.auth.loading
  };
};

const mapDispatchToProps = (dispatch: Dispatch<BaseAction>) => {
  return {
    authGithub: bindActionCreators(authGithub, dispatch)
  };
};
export const Landing = connect(
  mapStateToProps,
  mapDispatchToProps
)((props: LandingProps) => {
  const onSuccessGithub = (response: { code: string }) => {
    props.authGithub(response.code);
  };
  const onFailureGithub = (response: Error) => {
    throw response;
  };

  return (
    <Wrapper isDarkMode={props.isDarkMode}>
      <Container flex>
        <Section>
          <Title>
            DEV<span>LOVER</span>.ID
          </Title>
          <Subtitle>
            <em>
              Komunitas Developer
              <br />
            </em>
            <span>
              Kami adalah komunitas dimana software-engineer di Indonesia,
              berbagi ilmu, ide dan pengalaman, serta untuk saling membantu satu
              sama lain.
            </span>
          </Subtitle>
          <Button background="red">
            <CodeBlock size={14} className="icon" />
            Pelajari
          </Button>
          <GitHubLogin
            // buttonText="Connect with Github"
            className="github-button"
            clientId={process.env.GITHUB_CLIENT_ID}
            redirectUri={process.env.GITHUB_REDIRECT_URI}
            onSuccess={onSuccessGithub}
            onFailure={onFailureGithub}
          />
        </Section>
        <Section />
      </Container>
    </Wrapper>
  );
});
