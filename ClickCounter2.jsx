import React from "react";

export class ClickCounter2 extends React.Component {
  state = {
    lastPressedButton: "",
  };

  handleClickButton = (event) => {
    this.setState(() => {
      return { lastPressedButton: event.target.innerHTML };
    });
  };

  render() {
    return (
      <div>
        <h1>Last pressed button: {this.state.lastPressedButton}</h1>
        <button onClick={this.handleClickButton}>Button 1</button>
        <button onClick={this.handleClickButton}>Button 2</button>
        <button onClick={this.handleClickButton}>Button 3</button>
      </div>
    );
  }
}
