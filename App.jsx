import React from "react";
import { InteractiveWelcome } from "./InteractiveWelcome";
import Login from "./Login";
export class App extends React.Component {
  render() {
    return (
      <>
        <InteractiveWelcome />
        <Login />
      </>
    );
  }
}
