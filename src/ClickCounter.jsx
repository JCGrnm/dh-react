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
import React, { useEffect, useState } from "react";

export const ClickCounter = ({ initialValue = 0, onCounterChange }) => {
  const [counter, setCounter] = useState(initialValue);

  const handleClickCounter = () => {
    setCounter((countMe) => countMe + 1);
  };

  useEffect(() => {
    onCounterChange(counter);
  }, [counter, onCounterChange]);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleClickCounter}>Increase</button>
    </div>
  );
};
