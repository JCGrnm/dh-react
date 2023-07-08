import React from "react";
import { InteractiveWelcome } from "./InteractiveWelcome";
import Login from "./Login";
import UncontrolledLogin from "./UncontrolledLogin";
import TodoList from "./TodoList";
export class App extends React.Component {
  render() {
    return (
      <>
        <InteractiveWelcome />
        <Login />
        <UncontrolledLogin />
        <TodoList />
      </>
    );
  }
}
