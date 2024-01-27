import React from "react";
import * as Hooks from "src/app/hooks";

export const UserContext = React.createContext(undefined);

export const UserProvider = ({ children }) => {
  const [state, setUser] = React.useState(false);
  const { user, loading } = Hooks.User.useUser(state);

  const update = () => setUser(!state);

  return (
    <UserContext.Provider
      value={{
        ...user?.data,
        loading,
        update,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
