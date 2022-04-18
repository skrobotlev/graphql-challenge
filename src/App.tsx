import React, { useEffect, useState } from "react";
import "./App.css";
import { useMutation, useQuery } from "@apollo/client";
import { GET_DASH } from "./query/user";
import { LOGIN } from "./mutations/user";
import { useHistory } from "react-router-dom";
import { DASHBOARD } from "./router/consts";

const App = () => {
  const history = useHistory();

  const { data, loading, error, refetch } = useQuery(GET_DASH);
  const [login] = useMutation(LOGIN);
  // const [logout] = useMutation();
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");



  useEffect(() => {
    console.log(data, "dtaAAAA");
  }, [data]);

  return (
    <div>
      <form>
        <input
          value={username}
          placeholder="Login"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
        <input
          value={password}
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
          type="text"
        />
        <div className="btns">
          <button
            onClick={(e) => {
              e.preventDefault();
              login({
                variables: {
                  username,
                  password,
                },
              }).then((data) => {
                console.log(data.data.login.token);
                localStorage.setItem("token", data.data.login.token)
                // localStorage.getItem("token") && history.push(DASHBOARD);
                history.push(DASHBOARD);
              });
            }}
          >
            LOGIN
          </button>

        </div>
      </form>
    </div>
  );
};

export default App;
