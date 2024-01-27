import * as Pages from "src/app/pages";
import * as Routes from "src/app/routes";
import * as Layout from "src/app/layouts";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";

export const Main = () =>
  Router.useRoutes([
    {
      path: "*",
      element: <Components.Temp.PageNotFound />,
    },
    {
      path: "/",
      element: <Router.Navigate to="admin" />,
    },
    {
      path: "admin",
      element: <Router.Navigate to="login" />,
    },
    {
      path: "admin/*",
      element: <Layout.Account.Main />,
      children: [
        {
          path: "login/*",
          element: (
           
              <Pages.Account.Login.Main />
            
          ),
        },
    
      ],
    },
    {
      path: "admin/*",
      element: <Layout.Main.Main />,
      children: [
        {
          path: "dashboard/*",
          element: (
              <Pages.Dashboard.Main />
          ),
        },
      
      ],
    },
    {
      path: "/logout",
      element: <Pages.Account.Logout.Main />,
    },
  ]);
