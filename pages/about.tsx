import * as React from "react";

export interface AboutPageProps {
  query: {
    slug: string;
  };
}

export default class AboutPage extends React.Component<AboutPageProps, {}> {
  static async getInitialProps({ query, res }) {
    return { query };
  }
  public render() {
    return (
      <div>
        <h1>About, query: q {this.props.query.slug}</h1>
      </div>
    );
  }
}
