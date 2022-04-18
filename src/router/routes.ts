import App from "../App";
import DashboardPage from "../pages/dashboard";
import { DASHBOARD, LOGIN } from "./consts";

export const notAuthRoutes = [
  {
    path: LOGIN,
    Component: App,
  },
];

export const authRoutes = [
  {
    path: DASHBOARD,
    Component: DashboardPage,
  },
];
