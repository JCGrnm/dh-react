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
    const { render } = this.props;

    return (
      <div>
        <input type="text" value={inputValue} onChange={this.handleChange} />
        <button onClick={this.addItem}>Add</button>
        <button onClick={this.resetItems}>Reset</button>
        {render(items, this.removeItem)}
      </div>
    );
  }
}

export default TodoList;
