//MEMO EXERCISE
import React, { useMemo } from "react";

export const FilteredList = ({ list }) => {
  const filteredList = useMemo(
    () => list.filter((person) => person.age >= 18),
    [list]
  );

  return (
    <>
      <ul>
        {filteredList.map((person) => (
          <li key={person.id}>
            Name: {person.name}, age: {person.age}, id: {person.id}
          </li>
        ))}
      </ul>
    </>
  );
};
