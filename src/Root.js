import { BrowserRouter } from "react-router-dom";
import { App } from "./App.jsx";

export function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
