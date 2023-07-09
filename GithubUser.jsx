// import React, { useEffect, useState } from "react";

// export function GithubUser({ username }) {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     async function fetchDataGit(username) {
//       try {
//         const response = await fetch(
//           `https://api.github.com/users/${username}`
//         );
//         if (response.ok) {
//           const jsonData = await response.json();
//           setData(jsonData);
//         } else {
//           throw new Error(response.statusText);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     fetchDataGit(username);
//   }, [username]);

//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <img src={data.avatar_url} alt="avatar" />
//     </div>
//   );
// }

//EXERCISE HOOK 3
// import { useGithubUser } from "./useGithubUser";

// export function GithubUser({ username }) {
//   const data = useGithubUser(username);

//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <img src={data.avatar_url} alt="avatar" />
//     </div>
//   );
// }

//HOOK4
import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, loading, error, fetchDataGit } = useGithubUser();

  function handleFetch() {
    fetchDataGit(username);
  }

  return (
    <div>
      <button onClick={handleFetch}>fetch</button>
      <h1>{data && data.name}</h1>
      {data && <img src={data.avatar_url} alt="avatar" />}
      <h1>{loading && "Loading..."}</h1>
      <h1>{error}</h1>
    </div>
  );
}
