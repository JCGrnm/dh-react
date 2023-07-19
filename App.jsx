import React from "react";
import DisplayLanguage from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";

export class App extends React.Component {
  state = {
    language: "EN",
  };

  render() {
    return (
      <>
        <select
          onChange={(event) => {
            this.setState({
              language: event.target.value,
            });
          }}
        >
          <option value="EN">English</option>
          <option value="IT">Italiano</option>
          <option value="DE">Deutsch</option>
          <option value="FR">Français</option>
          <option value="ES">Español</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </>
    );
  }
}
