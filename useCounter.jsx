import { useState } from "react";

export function useCounter(initialValue) {
  let [counter, setCounter] = useState(initialValue);

  function increment() {
    setCounter((c) => c + 1);
  }

  function decrement() {
    setCounter((c) => c - 1);
  }

  function reset() {
    setCounter(initialValue);
  }

  return [counter, increment, decrement, reset];
}
