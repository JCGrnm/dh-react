import React from "react";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleLogin = () => {
    const { username, password } = this.state;
    console.log(
      `Logging in with username: ${username} and password: ${password}`
    );
    this.setState({
      username: "",
      password: "",
    }); // Clear the form after login
  };
  handleReset = () => {
    this.setState({
      username: "",
      password: "",
    });
  }; //handleReset is set + button on line 56

  render() {
    const { username, password } = this.state;
    const isDisabled = !username || !password;

    return (
      <div>
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.handleInputChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleInputChange}
          placeholder="Password"
        />
        <button disabled={isDisabled} onClick={this.handleLogin}>
          Login
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Login;
