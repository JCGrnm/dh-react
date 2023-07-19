import React, { useState } from "react";
import CarDetails from "./CarDetails";

export const App = () => {
  // Define initialData with default values for the form inputs
  const initialData = {
    model: "Tesla",
    year: "2023",
    color: "white",
  };

  // State to store the initialData
  const [formData, setFormData] = useState(initialData);

  // Function to handle changes to the form inputs and update the formData state
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <CarDetails initialData={formData} />
    </>
  );
};
