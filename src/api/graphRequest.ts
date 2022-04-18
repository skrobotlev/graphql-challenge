import axios from "axios";

// export const graphRequest = () => {
//   fetch("https://rickandmortyapi.com/graphql", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "<token>",
//     },
//     body: JSON.stringify({
//       query: `{
//         characters(filter :{name: "Morty"}) {
//           info {
//             count
//           }
//         }
//       }`,
//     }),
//   })
//     .then((r) => r.json())
//     .then((data) => console.log("data returned:", data));
// };
export const graphRequestQUERY = () => {
  fetch("https://gravitel-graphql-backend.herokuapp.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "<token>",
    },
    body: JSON.stringify({
      query: `{
        dashboard {
          dialogs {
            active
          }
        }
      }`,
    }),
  })
    .then((r) => r.json())
    .then((data) => console.log("data returned:", data));
};
export const graphRequestMUT = () => {
  const response = fetch(
    "https://gravitel-graphql-backend.herokuapp.com/graphql",
    {
      method: "POST",
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        // Accept: "application/json",
        Authorization: "<token>",
      },
      // body: JSON.stringify({ query: "{ token }" }),
      body: JSON.stringify({
        query: `mutation {
        login (username: "UserOne", password: "pass") {
          username, token, 
        }
      }`,
      }),
    }
  )
    .then((r) => r.json())
    .then((data) => {
      console.log("data returned:", data);
      // localStorage.setItem("token", data.login.token);
      return data;
    });
  // console.log(response, "resp");
  return response;
};
export const API_URL = `https://gravitel-graphql-backend.herokuapp.com/graphql`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default $api;
