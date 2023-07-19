import React from "react";
import { useForm } from "./useForm";

export const Form = () => {
  const { username, password, handleChange } = useForm();

  return (
    <form>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        value={password}
        onChange={handleChange}
      />
    </form>
  );
};
