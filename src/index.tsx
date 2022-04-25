import Store from "./store/store";
import React, { createContext } from "react";
import ReactDOM from "react-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import AppRouter from "./router";
import { BrowserRouter as Router } from "react-router-dom";

const httpLink = createHttpLink({
  uri: "https://gravitel-graphql-backend.herokuapp.com/graphql",
});
const token = localStorage.getItem("token");
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const store = new Store();

interface State {
  store: Store;
}

export const Context = createContext<State>({
  store,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Context.Provider value={{ store }}>
      <Router>
        <AppRouter />
      </Router>
    </Context.Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
