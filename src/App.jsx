import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Counter } from "./Counter";
import { GithubUserList } from "./GithubUserList";
import { ShowGithubUser } from "./ShowGithubUser";

export const App = () => {
  return (
    <>
      <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> |{" "}
      <Link to="/users">Username</Link>
      <div>
        <Routes>
          <Route path="/" element={<InteractiveWelcome />} />
          <Route path="/counter" element={<Counter initialValue={0} />} />

          <Route path="/users/*" element={<GithubUserList />}>
            <Route index element={<p>Add a user and select it</p>} />
            <Route path=":username" element={<ShowGithubUser />} />
          </Route>

          <Route path="*" element={<h1>We apologize, page not found</h1>} />
        </Routes>
      </div>
    </>
  );
};
