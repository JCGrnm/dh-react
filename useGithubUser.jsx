//EXERCISE HOOK 3
import { useEffect, useState } from "react";

export function useGithubUser(username) {
  let [data, setData] = useState({});

  async function fetchDataGit(username) {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (res.status === 200) {
      const json = await res.json();
      setData(json);
    }
  }

  useEffect(() => {
    fetchDataGit(username);
  }, [username]);

  return data;
}
