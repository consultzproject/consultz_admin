import * as Mui from "@mui/material";
import * as Router from "react-router-dom";

export const Main = () => (
  <Mui.Container maxWidth="lg">
    <Mui.Container maxWidth="sm">
      <Router.Outlet />
    </Mui.Container>
  </Mui.Container>
);