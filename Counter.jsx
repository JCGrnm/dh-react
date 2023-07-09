// useEffect -`Counter` as a function component
// Rewrite the Counter component as a function component
// and add a side effect that initializes the interval as soon as the component renders,
// and clears it when the component unmounts.

import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <h1>{count}</h1>;
}

export default Counter;
//-----------------------CLASS APPROACH ---------------------------
// import React from "react";
// import CounterDisplay from "./CounterDisplay";

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: this.props.initialCount,
//     };

//     setInterval(() => {
//       this.setState((prevState) => ({
//         count: prevState.count + this.props.increment,
//       }));
//     }, this.props.interval);
//   }

//   render() {
//     return <CounterDisplay count={this.state.count} />;
//   }
// }

// export default Counter;
