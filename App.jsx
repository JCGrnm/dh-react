import React from "react";
import { InteractiveWelcome } from "./InteractiveWelcome";
import Login from "./Login";
import UncontrolledLogin from "./UncontrolledLogin";
import TodoList from "./TodoList";
export class App extends React.Component {
  handleRender = (items, removeItem) => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <>
        <InteractiveWelcome />
        <Login />
        <UncontrolledLogin />
        <h1>My Todo List</h1>
        <TodoList render={this.handleRender} />
      </>
    );
  }
}
