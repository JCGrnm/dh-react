//SWR 02
import React from "react";
import { useGithubUser } from "./useGithubUser";

export const GithubUser = ({ username }) => {
  const { user, isLoading, error } = useGithubUser(username);

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {user && (
        <>
          <h1>{user.name}</h1>
          <img src={user.avatar_url} alt="avatar" />
        </>
      )}
      {error && <h1>Error: {error}</h1>}
    </div>
  );
};

//ROUTER EXERCISE  - main version
// import React from "react";
// import { useGithubUser } from "./useGithubUser";

// export const GithubUser = ({ username }) => {
//   const { data, loading, error, fetchDataGit } = useGithubUser(username);

//   const handleFetch = () => {
//     fetchDataGit(username);
//   };

//   return (
//     <div>
//       <button onClick={handleFetch} disabled={loading}>
//         {loading ? "Fetching..." : "Fetch"}
//       </button>
//       {loading && <h1>Loading...</h1>}
//       {data && (
//         <>
//           <h1>{data.name}</h1>
//           <img src={data.avatar_url} alt="avatar" />
//         </>
//       )}
//       {error && <h1>Error: {error}</h1>}
//     </div>
//   );
// };

//ROUTER EXERCISE  - form to search for username
// import React, { useState } from "react";
// import { useGithubUser } from "./useGithubUser";

// export const GithubUser = () => {
//   const [username, setUsername] = useState("");
//   const [fetchDataGit, data, error, loading] = useGithubUser(username);

//   const handleSearch = () => {
//     fetchDataGit(username);
//   };

//   return (
//     <>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="Enter GitHub username"
//       />
//       <button onClick={handleSearch}>Search</button>
//       {loading && <h1>Loading...</h1>}
//       {error && <h1>{error}</h1>}
//       {data.name && <h1>{data.name}</h1>}
//       {data.avatar && <img src={data.avatar} alt="GitHub Avatar" />}
//       {data.bio && <p>{data.bio}</p>}
//     </>
//   );
// };
//---------------------------------------------------------------
//EXERCISE GITHUB-USER
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
//-----------------------------------------------------------------
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
//-------------------------------------------------------------------
//EXERCISE HOOK4
// import { useGithubUser } from "./useGithubUser";

// export function GithubUser({ username }) {
//   const { data, loading, error, fetchDataGit } = useGithubUser();

//   function handleFetch() {
//     fetchDataGit(username);
//   }

//   return (
//     <div>
//       <button onClick={handleFetch}>fetch</button>
//       <h1>{data && data.name}</h1>
//       {data && <img src={data.avatar_url} alt="avatar" />}
//       <h1>{loading && "Loading..."}</h1>
//       <h1>{error}</h1>
//     </div>
//   );
// }
