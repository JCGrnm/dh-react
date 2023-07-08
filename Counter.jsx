// Component Lifecycle 01

// Modify the `Counter` component so that the interval is initialized
//within the `componentDidMount` life cycle method instead of the constructor.
//Is the constructor still required ?
//A: NO, the constructor is not required anymore
//since its only purpose was to set the initial state,
//which can be done using the class property syntax.

import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        return { count: state.count + this.props.incrementAmount };
      });
    }, this.props.incrementInterval);
  }
  componentWillUnmount() {
    clearInterval(this.timeout);
  }
  render() {
    return <CounterDisplay counter={this.state.count} />;
  }
}
export default Counter;
