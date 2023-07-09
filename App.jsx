import React from "react";

import Login from "./Login";

import { ClickCounter } from "./ClickCounter";

export class App extends React.Component {
  render() {
    return (
      <>
        <ClickCounter
          initialValue={15}
          onCounterChange={(counter) => console.log(counter)}
        />

        <Login />
      </>
    );
  }
}
