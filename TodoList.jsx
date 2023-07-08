import React from "react";

class TodoList extends React.Component {
  state = {
    items: [],
    inputValue: "", //RESET TO ZERO
  };

  addItem = () => {
    const { inputValue, items } = this.state;
    if (inputValue !== "") {
      this.setState((prevState) => ({
        items: [...prevState.items, inputValue],
        inputValue: "", //RESET TO ZERO
      }));
    }
  };
  //reset whole list handling + reset button line 37
  resetItems = () => {
    this.setState({
      items: [],
    });
  };
  //remove button handling + remove button on line 49
  removeItem = (index) => {
    this.setState((prevState) => {
      const updatedItems = prevState.items.filter((x, i) => i !== index);
      return { items: updatedItems };
    });
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
        <button onClick={this.resetItems}>Reset my list!</button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => this.removeItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
