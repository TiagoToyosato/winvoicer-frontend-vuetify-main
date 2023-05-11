import { Login, Dashboard, Accounts } from "../views/account";

const accountRoutes = [{
  path: "/login",
  name: "Login",
  component: Login
},
{
  path: "/dashboard",
  name: "Dashboard",
  component: Dashboard
},
{
  path: "/all_accounts",
  name: "Accounts",
  component: Accounts
}];

export default accountRoutes