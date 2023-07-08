import React from "react";
import { Counter } from "./Counter";

class App extends React.Component {
  render() {
    return (
      <>
        <Counter initialCount={5} increment={20} interval={1000} />
      </>
    );
  }
}

export default App;
