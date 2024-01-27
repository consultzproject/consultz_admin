import "./loader.css";
import * as Mui from "@mui/material";

export const Loader = () => {
  const theme = Mui.useTheme();
  return (
    <Mui.Box component="div" className="sk-cube-grid">
      <Mui.Box
        component="div"
        className={theme.palette.mode === "dark" ? "loader2" : "loader"}
      ></Mui.Box>
    </Mui.Box>
  );
};
