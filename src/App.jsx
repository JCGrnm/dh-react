import React from "react";
import { Route, Routes } from "react-router-dom";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Counter } from "./Counter";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<InteractiveWelcome />} />
        <Route path="/counter" element={<Counter initialValue={0} />} />
      </Routes>
    </>
  );
};
