// Component Lifecycle 01

// Modify the `Counter` component so that the interval is initialized
//within the `componentDidMount` life cycle method instead of the constructor.
//Is the constructor still required ?
//A: NO, the constructor is not required anymore
//since its only purpose was to set the initial state,
//which can be done using the class property syntax.

import React from "react";
import CounterDisplay from "./CounterDisplay";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialCount,
    };

    setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + this.props.increment,
      }));
    }, this.props.interval);
  }

  render() {
    return <CounterDisplay count={this.state.count} />;
  }
}

export default Counter;
