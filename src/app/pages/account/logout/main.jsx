import React from "react";
import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Contexts from "src/app/contexts";
import * as Components from "src/app/components";

export const Main = () => {
  const navigate = Router.useNavigate();
  const user = React.useContext(Contexts.UserContext);
  const Logout = () => {
    localStorage.clear();
    user?.update();
    navigate("/");
  };
  return (
    <Components.Global.Dialog open={true} icon maxWidth="lg">
      <Mui.Box sx={{ p: 2 }}>
        <Mui.Typography variant="h4" fontWeight="bolder" align="left">
          Logout
        </Mui.Typography>
        <Mui.Typography variant="subtitle1" align="center" sx={{ mt: 2 }}>
          Are you sure do you want to Logout
        </Mui.Typography>
        <Mui.Stack
          direction="row"
          justifyContent="center"
          sx={{ mt: 4 }}
          spacing={2}
        >
          <Mui.Button variant="contained" onClick={Logout}>
            Ok
          </Mui.Button>
          <Mui.Button variant="outlined" onClick={() => navigate(-1)}>
            Cancel
          </Mui.Button>
        </Mui.Stack>
      </Mui.Box>
    </Components.Global.Dialog>
  );
};
