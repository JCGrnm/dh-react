// Extract the "Your age is " message into a new component called Age
//and render it within the Welcome component.
//Pass to the Age component the age prop that Welcome is receiving from the App component.
import React from "react";

class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>Welcome, {name}!</p>
        <Age age={age} />
      </div>
    );
  }
}

class Age extends React.Component {
  render() {
    const { age } = this.props;
    return <p>Your age is {age}.</p>;
  }
} //separabile ora in folder component

Welcome.defaultProps = {
  name: "our esteemed User",
  age: "...?",
};

function App() {
  return (
    <div>
      <Welcome name={<strong>Geronimo</strong>} />
    </div>
  );
}

export default App;
