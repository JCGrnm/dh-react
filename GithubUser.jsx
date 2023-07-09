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
import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const data = useGithubUser(username);

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.avatar_url} alt="avatar" />
    </div>
  );
}
