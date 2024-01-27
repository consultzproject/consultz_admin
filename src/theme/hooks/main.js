import * as React from "react";

export const ThemeContext = React.createContext({
  mode: localStorage.getItem("theme") === "dark",
  changeMode: () => {},
});
