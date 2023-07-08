import React from "react";

export class ClickCounter extends React.Component {
  state = {
    count: 0,
  };
  handleCounterIncrese = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleCounterIncrese}>Increase</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
