import * as React from "react";
import GitHubLogin from "react-github-login";
import { connect } from "react-redux";
import { bindActionCreators, Action } from "redux";
import { Button } from "../components/atoms/Button";
import { Container } from "../components/atoms/Container";
import { Header } from "../components/organisms/Header";
import { RootState } from "../store";
import { appToggleDarkMode } from "../store/app";
import { counterIncrement, counterIncrementAsync } from "../store/counter";
import { InitialProps } from "../types";

// import { NextAppContext } from "next/app";

export interface IndexProps {
  counter: number;
  isDarkMode: boolean;
  counterIncrement: () => void;
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
  onSuccess = response => {
    console.log(response);
  };
  onFailure = response => {
    throw response;
  };
  public render() {
    return (
      <div>
        <Header />
        <Container>
          <Button fontColor="pink">Login</Button>
          <h2>{process.env.TEST}</h2>
          <h1>{this.props.counter}</h1>
          <GitHubLogin
            clientId={process.env.GITHUB_CLIENT_ID}
            redirectUri={process.env.GITHUB_REDIRECT_URI}
            onSuccess={this.onSuccess}
            onFailure={this.onFailure}
          />
          <button onClick={() => this.props.counterIncrementAsync()}>
            inc async
          </button>
          {this.props.isDarkMode ? "darkmode" : "lightmode"}
          <br />
          <Button onClick={() => this.props.appToggleDarkMode()}>
            Toggle dark mode
          </Button>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    counter: state.counter.count,
    isDarkMode: state.app.isDarkMode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    counterIncrement: bindActionCreators(counterIncrement, dispatch),
    counterIncrementAsync: bindActionCreators(counterIncrementAsync, dispatch),
    appToggleDarkMode: bindActionCreators(appToggleDarkMode, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
