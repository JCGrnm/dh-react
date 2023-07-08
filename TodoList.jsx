import React from "react";

class TodoList extends React.Component {
  state = {
    items: [],
  };

  addItem = () => {
    const { inputValue, items } = this.state;
    if (inputValue !== "") {
      this.setState((prevState) => ({
        items: [...prevState.items, inputValue],
      }));
    }
  };

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const { inputValue, items } = this.state;

    return (
      <div>
        <h1>STUFF TO DO</h1>
        <input type="text" value={inputValue} onChange={this.handleChange} />
        <button onClick={this.addItem}>Add me!</button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
