import React from "react";
import FilteredList from "./FilteredList";

export const App = () => {
  const data = [
    { id: 1, name: "Jonna Geronimo", age: 26 },
    { id: 2, name: "Mario Rossi", age: 17 },
    { id: 3, name: "Maria Verdi", age: 18 },
  ];

  return (
    <div>
      <h1>Filtered List:</h1>
      <FilteredList list={data} />
    </div>
  );
};
