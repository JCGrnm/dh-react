import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUserList() {
  let [userList, setUserList] = useState([]);
  let [username, setUsername] = useState("");

  function handleChange(event) {
    setUsername(event.target.value);
  }

  function handleAddList() {
    setUserList((userList) => {
      console.log([...userList, username]);
      return [...userList, username];
    });
  }

  return (
    <div>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <button onClick={handleAddList}>Add</button>
      {userList.map((user) => {
        return <GithubUser key={user} username={user} />;
      })}
    </div>
  );
}
