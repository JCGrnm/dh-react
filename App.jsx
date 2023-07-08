import React from "react";
import { InteractiveWelcome } from "./InteractiveWelcome";
import Login from "./Login";
import UncontrolledLogin from "./UncontrolledLogin";
export class App extends React.Component {
  render() {
    return (
      <>
        <InteractiveWelcome />
        <Login />
        <UncontrolledLogin />
      </>
    );
  }
}
