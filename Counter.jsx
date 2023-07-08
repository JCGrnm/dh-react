import React from "react";

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
  render() {
    return <h1>{this.state.count}</h1>;
  }
}
export default Counter;
