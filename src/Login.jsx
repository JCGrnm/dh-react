import React, { useState } from "react";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleRememberChange = () => {
    setRemember(!remember);
  };

  const handleLogin = () => {
    console.log(
      `Logging in with username: ${username} and password: ${password}`
    );
    setUsername("");
    setPassword("");
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setRemember(false);
  };

  const isDisabled = !username || !password;

  return (
    <div>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleInputChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleInputChange}
        placeholder="Password"
      />
      <label>
        Remember me!
        <input
          type="checkbox"
          name="remember"
          checked={remember}
          onChange={handleRememberChange}
        />
      </label>
      <button disabled={isDisabled} onClick={handleLogin}>
        Login
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

//----------------------CLASS APPROACH ----------------------------
// import React from "react";

// class Login extends React.Component {
//   state = {
//     username: "",
//     password: "",
//   };

//   handleInputChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleLogin = () => {
//     const { username, password } = this.state;
//     console.log(
//       `Logging in with username: ${username} and password: ${password}`
//     );
//     this.setState({
//       username: "",
//       password: "",
//     }); // Clear the form after login
//   };
//   handleReset = () => {
//     this.setState({
//       username: "",
//       password: "",
//     });
//   }; //handleReset is set + button on line 56

//   render() {
//     const { username, password } = this.state;
//     const isDisabled = !username || !password;

//     return (
//       <div>
//         <input
//           type="text"
//           name="username"
//           value={username}
//           onChange={this.handleInputChange}
//           placeholder="Username"
//         />
//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={this.handleInputChange}
//           placeholder="Password"
//         />
//         <button disabled={isDisabled} onClick={this.handleLogin}>
//           Login
//         </button>
//         <button onClick={this.handleReset}>Reset</button>
//       </div>
//     );
//   }
// }

// export default Login;
