import React from "react";

export class Welcome extends React.Component {
  render() {
    return (
      <>
        <p>Welcome, {this.props.name ? this.props.name : "User"}!</p>
      </>
    );
  }
}
