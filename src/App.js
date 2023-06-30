import React from "react";

class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>Welcome, {name}!</p>
        <p>Your age is {age}.</p>
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: "our esteemed User",
  age: "...?",
};

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}

export default App;
