import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { ClickCounter } from "./ClickCounter";
import { Counter } from "./Counter";
// import { CounterDisplay } from "./CounterDisplay";
// import { GithubUserList } from "./GithubUserList";
// import { CounterButton } from "./CounterButton";
// import { Form } from "./Form";
// import { CarDetails } from "./CarDetails";
// import { DisplayLanguage } from "./DisplayLanguage";
// import { LanguageContext } from "./LanguageContext";
// import { GithubUser } from "./GithubUser";
// import { FilteredList } from "./FilteredList";

export const App = () => {
  // const [language, setLanguage] = useState("EN");
  // const initialData = {
  //   model: "Tesla",
  //   year: "2023",
  //   color: "white",
  // };
  // const data = [
  //   { id: 1, name: "Jonna Geronimo", age: 26 },
  //   { id: 2, name: "Mario Rossi", age: 17 },
  //   { id: 3, name: "Maria Verdi", age: 18 },
  // ];
  // const [formData, setFormData] = useState(initialData);

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  return (
    <Router>
      <>
        <InteractiveWelcome />
        <Login />
        <ClickCounter
          initialValue={15}
          onCounterChange={(counter) => console.log(counter)}
        />
        <Routes>
          <Route path="/counter" element={<Counter initialValue={0} />} />
        </Routes>
        {/* <CounterDisplay />
        <GithubUser />
        <GithubUserList />
        <CounterButton />
        <Form />
        <CarDetails initialData={formData} />
        <select
          onChange={(event) => {
            setLanguage(event.target.value);
          }}
        >
          <option value="EN">English</option>
          <option value="IT">Italiano</option>
          <option value="DE">Deutsch</option>
          <option value="FR">Français</option>
          <option value="ES">Español</option>
        </select>
        <LanguageContext.Provider value={language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
        <h1>Filtered List:</h1>
        <FilteredList list={data} /> */}
      </>
    </Router>
  );
};
