// CLASS EXERCISE
// import React from "react";
// import { LanguageContext } from "./LanguageContext";

// export class DisplayLanguage extends React.Component {
//   render() {
//     return (
//       <div>
//         <LanguageContext.Consumer>
//           {(language) => {
//             return <h1>Your language of choice is: {language}</h1>;
//           }}
//         </LanguageContext.Consumer>
//       </div>
//     );
//   }
// }

//USECONTEXT HOOK EXERCISE
import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const DisplayLanguage = () => {
  const language = useContext(LanguageContext);

  return (
    <div>
      <h1>Chosen language: {language}</h1>
    </div>
  );
};

export default DisplayLanguage;
