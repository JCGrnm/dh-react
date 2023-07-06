//1 What happens if the name prop is a JSX expression instead of a string?
//2 How do you pass a prop that contains a JSX expression ?
//Modify the value passed to the name prop so that it's contained within a strong tag.

//ANSWER: 1 the name prop will still work correctly.
//2: see line 29

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
      <Welcome name={<strong>Geronimo</strong>} />
    </div>
  );
}

export default App;
