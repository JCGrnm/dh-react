import React from "react";

import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";

export class App extends React.Component {
  render() {
    return (
      <>
        <GithubUser username="JCGrnm" />
        <GithubUserList />
      </>
    );
  }
}
