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
import { Landing } from "../components/organisms/Landing";
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
      // await store.dispatch(counterIncrement());
    }
    return {};
  }

  public render() {
    return (
      <div>
        <Header />
        <Landing />
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
