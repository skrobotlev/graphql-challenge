import React, { useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { DASHBOARD, LOGIN } from "./consts";
import { authRoutes, notAuthRoutes } from "./routes";

const AppRouter = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  useEffect(() => {
    token && history.push(DASHBOARD);
  }, [token]);

  return (
    <Switch>
      {notAuthRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} component={Component} exact />;
      })}
      {token &&
        authRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} component={Component} exact />;
        })}
      <Redirect to={LOGIN} />
    </Switch>
  );
};

export default AppRouter;
