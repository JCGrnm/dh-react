//EXERCISE HOOK 3
// import { useEffect, useState } from "react";

// export function useGithubUser(username) {
//   let [data, setData] = useState({});

//   async function fetchDataGit(username) {
//     const res = await fetch(`https://api.github.com/users/${username}`);
//     if (res.status === 200) {
//       const json = await res.json();
//       setData(json);
//     }
//   }

//   useEffect(() => {
//     fetchDataGit(username);
//   }, [username]);

//   return data;
// }
//HOOK 4
import { useState } from "react";

export function useGithubUser() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchDataGit(username) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const json = await res.json();
      if (res.status !== 200) {
        setError("User not found");
      }
      setData(json);
    } catch (error) {
      setError("Something went wrong");
      setData({});
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, error, fetchDataGit };
}
