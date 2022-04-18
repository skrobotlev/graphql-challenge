
import Store from "./store/store";
import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import AppRouter from "./router";
import { BrowserRouter as Router } from "react-router-dom";
// import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const httpLink = createHttpLink({
  uri: "https://gravitel-graphql-backend.herokuapp.com/graphql",
});
const token = localStorage.getItem("token");
const authLink = setContext((_, { headers }) => {
  // const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
console.log(token);
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const store = new Store();

interface State {
  store: Store
}

export const Context = createContext<State>({
  store
})

// ReactDOM.render(
//   <React.StrictMode>
//     <Context.Provider value={{ store }}>
//       <App />
//     </Context.Provider>
//   </React.StrictMode>,

//   document.getElementById('root')
// );
ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <AppRouter />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);