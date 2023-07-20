import React from "react";

export const CounterDisplay = ({ count }) => (
  <div>
    <h1>{count}</h1>
  </div>
);

//------------------------------------------------
//CLASS APPROACH
// import React from "react";

// class CounterDisplay extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.count}</h1>
//       </div>
//     );
//   }
// }

// export default CounterDisplay;
