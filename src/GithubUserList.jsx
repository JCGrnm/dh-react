import React, { useState } from "react";
import { GithubUser } from "./GithubUser";

export const GithubUserList = () => {
  const [userList, setUserList] = useState([]);
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleAddList = () => {
    setUserList((prevUserList) => [...prevUserList, username]);
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <button onClick={handleAddList}>Add</button>
      {userList.map((user) => (
        <GithubUser key={user} username={user} />
      ))}
    </div>
  );
};
