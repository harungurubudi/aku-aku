import * as React from "react";
import { Header } from "../components/organisms/Header";
import { NextAppContext } from "next/app";

export interface AboutPageProps {
  query: {
    slug: string;
  };
}

export default class AboutPage extends React.Component<AboutPageProps, {}> {
  // tslint:disable-next-line:typedef
  static async getInitialProps({ query, res }) {
    return { query };
  }
  public render() {
    return (
      <div>
        <Header />
        <h1>About, query: q {this.props.query.slug}</h1>
      </div>
    );
  }
}
