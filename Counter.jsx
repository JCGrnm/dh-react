import React from "react";
import { CounterDisplay } from "./CounterDisplay";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialValue,
    };
    setInterval(() => {
      this.setState((state) => {
        return { count: state.count + this.props.incrementAmount };
      });
    }, this.props.incrementInterval);
  }
  // componentWillUnmount() {
  //   clearInterval(this.timeout);
  // }

  render() {
    return <CounterDisplay counter={this.state.count} />;
  }
}

export default Counter;
