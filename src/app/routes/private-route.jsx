import React from "react";
import * as Router from "react-router-dom";
import * as Contexts from "src/app/contexts";
import * as Components from "src/app/components";

export const Private = ({ protect, children }) => {
  const user = React.useContext(Contexts.UserContext);
  if (user?.loading) return <Components.Temp.Cirular />;

  if (
    (Boolean(user?.email) && protect) ||
    (Boolean(!user?.email) && !protect)
  ) {
    return <>{children}</>;
  }

  return Boolean(user?.email) ? (
    <Router.Navigate to="/admin/dashboard" />
  ) : (
    <Router.Navigate to="/admin/login" />
  );
};
