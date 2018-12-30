import * as React from "react";
import GitHubLogin from "react-github-login";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Button, Container } from "../components/atoms";
import { Header } from "../components/organisms";
import { RootState } from "../store";
import { appToggleDarkMode } from "../store/App";
import { counterIncrement } from "../store/Counter";
import { authGithub } from "../store/Auth";
import { InitialProps } from "../types";
import chroma from "chroma-js";

import routes from "../routes";
import { BaseAction } from "../store/utils";
import { theme } from "../components/theme";
const Link = routes.Link;
export interface IndexProps {
  counter: number;
  isDarkMode: boolean;
  loading: boolean;

  authGithub: (githubOAuthCode: string) => void;
  counterIncrement: (amount?: number) => void;
  counterIncrementAsync: () => void;
  appToggleDarkMode: () => void;
}
class Index extends React.Component<IndexProps, {}> {
  static async getInitialProps({ isServer, store }: InitialProps) {
    if (isServer) {
      await store.dispatch(counterIncrement());
    }
    return {};
  }
  onSuccessGithub = (response: { code: string }) => {
    this.props.authGithub(response.code);
  };
  onFailureGithub = (response: Error) => {
    throw response;
  };
  public render() {
    return (
      <div>
        <Header />
        <div
          style={{
            padding: "40px 0",
            background: this.props.isDarkMode
              ? chroma(theme.black)
                  .brighten(0.2)
                  .hex()
              : chroma(theme.grey)
                  .brighten(1.2)
                  .hex()
          }}
        >
          <Container>
            <h1 style={{ fontFamily: theme.fontFamilyMonospace, marginTop: 0 }}>
              DEV<span style={{ color: theme.red }}>LOVER</span>.ID
            </h1>
            <h3 style={{ fontWeight: "normal", maxWidth: 600 }}>
              <strong>
                <code>devlover.id</code>
              </strong>{" "}
              adalah platform dimana software-engineer di Indonesia, berbagi
              ilmu, ide dan pengalaman, serta untuk saling membantu satu sama
              lain.
            </h3>
            <Button background="red">Explore</Button>
            <GitHubLogin
              // buttonText="Connect with Github"
              className="github-button"
              clientId={process.env.GITHUB_CLIENT_ID}
              redirectUri={process.env.GITHUB_REDIRECT_URI}
              onSuccess={this.onSuccessGithub}
              onFailure={this.onFailureGithub}
            />
          </Container>
        </div>
        <Container>
          <h2>{this.props.isDarkMode ? "darkmode" : "lightmode"}</h2>
          <br />
          <Button>try auth github {this.props.loading && "loading..."}</Button>
          <br />
          <Button onClick={() => this.props.appToggleDarkMode()}>
            Toggle dark mode
          </Button>

          <br />
          <Link to="/editor">
            <a>
              <Button>sneak peek editor</Button>
            </a>
          </Link>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    counter: state.counter.count,
    isDarkMode: state.app.isDarkMode,
    loading: state.auth.loading
  };
};

const mapDispatchToProps = (dispatch: Dispatch<BaseAction>) => {
  return {
    authGithub: bindActionCreators(authGithub, dispatch),
    counterIncrement: bindActionCreators(counterIncrement, dispatch),
    appToggleDarkMode: bindActionCreators(appToggleDarkMode, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
