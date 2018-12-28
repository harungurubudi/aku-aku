import { Header } from "../components/organisms/Header";
import { Input } from "../components/atoms/Input";
import { Button } from "../components/atoms/Button";
import { Container } from "../components/atoms/Container";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { countIncrement, countDecrement } from "../store";
import GitHubLogin from "react-github-login";

import * as React from "react";
import { InitialProps } from "../types";
// import { NextAppContext } from "next/app";

export interface IndexProps {
  count: number;
}

class Index extends React.Component<IndexProps, {}> {
  static async getInitialProps({ isServer, store }: InitialProps) {
    if (isServer) {
      await store.dispatch(countIncrement());
    }
    return {};
  }
  onSuccess = response => {
    console.log(response);
  };
  onFailure = response => {
    throw response;
    console.error(response);
  };
  public render() {
    return (
      <div>
        <Header />
        <Container>
          <Input
            label="Username"
            placeholder="bukan nama asli"
            background="yellow"
          />
          <br />
          <Input label="password" placeholder="rahasia" background="yellow" />
          <br />
          <Button fontColor="pink">Login</Button>
          <h2>{process.env.TEST}</h2>
          <h1>{this.props.count}</h1>
          <GitHubLogin
            clientId={process.env.GITHUB_CLIENT_ID}
            redirectUri={process.env.GITHUB_REDIRECT_URI}
            onSuccess={this.onSuccess}
            onFailure={this.onFailure}
          />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    countIncrement: bindActionCreators(countIncrement, dispatch),
    countDecrement: bindActionCreators(countDecrement, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
