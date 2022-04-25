import DashboardPage from "../pages/dashboard";
import LoginPage from "../pages/login";
import { DASHBOARD, LOGIN } from "./consts";

export const notAuthRoutes = [
  {
    path: LOGIN,
    Component: LoginPage,
  },
];

export const authRoutes = [
  {
    path: DASHBOARD,
    Component: DashboardPage,
  },
];
