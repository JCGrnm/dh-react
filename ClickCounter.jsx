// import React from "react";

// export class ClickCounter extends React.Component {
//   state = {
//     count: 0,
//   };
//   handleCounterIncrease = () => {
//     this.setState((state) => {
//       return {
//         count: state.count + 1,
//       };
//     });
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleCounterIncrease}>Increase</button>
//         <p>{this.state.count}</p>
//       </div>
//     );
//   }
// }

import React, { useState } from "react";
export function ClickCounter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  const clickHandler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={clickHandler}>increment</button>
    </div>
  );
}
