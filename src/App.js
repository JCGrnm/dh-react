import React from "react";

class Welcome extends React.Component {
  render() {
    const { name } = this.props;
    return <p>Welcome, {name}!!!</p>;
  }
}

function App() {
  return (
    <div>
      <Welcome name="Geronimo" />
    </div>
  );
}

export default App;
