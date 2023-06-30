// What happens if no name prop is passed to the Welcome component?
//Can you set a default value for the name prop ?
// 1 - it returns undefined
// 2 - yes, by adding a default name prop

import React from "react";

class Welcome extends React.Component {
  render() {
    const { name } = this.props;
    return <p>Welcome, {name}!</p>;
  }
}

Welcome.defaultProps = {
  name: "our esteemed User",
};

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}

export default App;
