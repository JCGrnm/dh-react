//EXERCISE SWR 03
//must use MUTATE
import useSWR, { mutate } from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export const useGithubUser = (username) => {
  const url = username ? `https://api.github.com/users/${username}` : null;

  const { data, error } = useSWR(url, fetcher);

  const manualRefetch = async () => {
    await mutate(url); // Manually trigger data refetching
  };

  return { user: data, error, isLoading: !data && !error, manualRefetch };
};

//EXERCISE SWR 02 --------------------------------
// import useSWR from "swr";

// const fetcher = (url) => fetch(url).then((response) => response.json());

// export const useGithubUser = (username) => {
//   const url = username ? `https://api.github.com/users/${username}` : null;

//   const { data, error } = useSWR(url, fetcher);

//   return { user: data, error, isLoading: !data && !error };
// };

//EXERCISE SWR 01 --------------------------------

// import useSWR from "swr";

// export const useGithubUser = (username, defaultData = {}) => {
//   const fetcher = async (url) => {
//     const response = await fetch(url);
//     if (!response.ok) {
//       const error = new Error("An error occurred while fetching the data.");
//       error.status = response.status;
//       throw error;
//     }
//     return await response.json();
//   };

//   const { data, error } = useSWR(
//     `https://api.github.com/users/${username}`,
//     fetcher,
//     { initialData: defaultData }
//   );

//   return { data, error, loading: !data && !error };
// };

//EXERCISE ROUTER - main version --------------------------------
// import { useState } from "react";

// export const useGithubUser = (username, defaultData = {}) => {
//   const [data, setData] = useState(defaultData);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchDataGit = async (username) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const userDataResponse = await fetch(
//         `https://api.github.com/users/${username}`
//       );
//       const avatarResponse = await fetch(
//         `https://api.github.com/users/${username}/avatar_url`
//       );

//       if (!userDataResponse.ok) {
//         setError("User not found");
//         setData(defaultData);
//       } else {
//         const userData = await userDataResponse.json();
//         const avatarData = await avatarResponse.json();
//         setData({ ...userData, avatar: avatarData.avatar_url });
//       }
//     } catch (error) {
//       setError("Something went wrong");
//       setData(defaultData);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { fetchDataGit, data, error, loading };
// };

//EXERCISE ROUTER - old version --------------------------------
// import { useState } from "react";

// export const useGithubUser = (username, defaultData = {}) => {
//   const [data, setData] = useState(defaultData);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchDataGit = async (username) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const [userResponse, avatarResponse] = await Promise.all([
//         fetch(`https://api.github.com/users/${username}`),
//         fetch(`https://api.github.com/users/${username}`),
//       ]);

//       const userData = await userResponse.json();
//       const avatarData = await avatarResponse.json();

//       if (userResponse.status === 404) {
//         setError("User not found");
//         setData(defaultData);
//       } else if (userResponse.status !== 200) {
//         setError("Something went wrong");
//         setData(defaultData);
//       } else {
//         setData({ ...userData, avatar: avatarData.avatar_url });
//       }
//     } catch (error) {
//       setError("Something went wrong");
//       setData(defaultData);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return [fetchDataGit, data, error, loading];
// };

//EXERCISE HOOK 3---------------------------------------------------------
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
//EXERCISE HOOK 4------------------------------------------------------------------
// import { useState } from "react";

// export const useGithubUser = (username) => {
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   async function fetchDataGit(username) {
//     setLoading(true);
//     setError(null);
//     try {
//       const res = await fetch(`https://api.github.com/users/${username}`);
//       const json = await res.json();
//       if (res.status !== 200) {
//         setError("User not found");
//       }
//       setData(json);
//     } catch (error) {
//       setError("Something went wrong");
//       setData({});
//     } finally {
//       setLoading(false);
//     }
//   }

//   return [fetchDataGit, data, error, loading];
// };
