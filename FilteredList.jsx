//useMemo exercise
// Create a FilteredList component that receives a list of objects each containing
// a name, an id and a age prop.
// The FilteredList component should render only the items of the list
// whose age is greater than 18, and the filtering should only happen when the list changes.
// Use useMemo to memoize the filtered list.

import React, { useMemo } from "react";

function FilteredList({ list }) {
  const filteredList = useMemo(
    () => list.filter((person) => person.age >= 18),
    [list]
  );

  return (
    <div>
      <ul>
        {filteredList.map((person) => (
          <li>
            Name: {person.name}, age: {person.age}, id: {person.id}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default FilteredList;
