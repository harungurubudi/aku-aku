import * as React from "react";
import GitHubLogin from "react-github-login";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Container } from "../components/atoms";
import { Header } from "../components/organisms";
import { RootState } from "../store";
import { appToggleDarkMode } from "../store/app";
import { counterIncrement, counterIncrementAsync } from "../store/counter";
import { InitialProps } from "../types";
import routes from "../routes";
const Link = routes.Link;
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
          <h3 style={{ fontWeight: "normal", maxWidth: 600, marginTop: 70 }}>
            devlover.id adalah platform dimana software-engineer di Indonesia,
            berbagi ilmu, ide dan pengalaman, serta untuk saling membantu satu
            sama lain.
          </h3>
          <GitHubLogin
            className="github-button"
            clientId={process.env.GITHUB_CLIENT_ID}
            redirectUri={process.env.GITHUB_REDIRECT_URI}
            onSuccess={this.onSuccess}
            onFailure={this.onFailure}
          />
          <br />
          <br />
          <hr />
          <h2>{this.props.isDarkMode ? "darkmode" : "lightmode"}</h2>
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
