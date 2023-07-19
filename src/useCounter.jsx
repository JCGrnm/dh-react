//CUSTOM HOOK 01 - EXERCISE
// import { useState } from "react";

// export function useCounter(initialValue) {
//   let [counter, setCounter] = useState(initialValue);

//   function increment() {
//     setCounter((c) => c + 1);
//   }

//   function decrement() {
//     setCounter((c) => c - 1);
//   }

//   function reset() {
//     setCounter(initialValue);
//   }

//   return [counter, increment, decrement, reset];
// }

//USECALLBACK EXERCISE
import { useState, useCallback } from "react";

export function useCounter(initialValue) {
  let [counter, setCounter] = useState(initialValue);

  const increment = useCallback(() => {
    setCounter((c) => c + 1);
  }, []);

  const decrement = useCallback(() => {
    setCounter((c) => c - 1);
  }, []);

  const reset = useCallback(() => {
    setCounter(initialValue);
  }, [initialValue]);

  return [counter, increment, decrement, reset];
}
