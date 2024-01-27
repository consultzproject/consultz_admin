import * as React from "react";
import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as MuiIcons from "@mui/icons-material";
import * as Components from "src/app/components";

export const AppBarr = ({ matches, drawerWidth, handleDrawer }) => {
  return (
    <Mui.AppBar
      component={Mui.Stack}
      direction="row"
      alignItems="center"
      sx={{
        bgcolor: (theme) => (theme.palette.mode === "dark" ? "#36404a" : ""),
      }}
    >
      <Mui.Box sx={{ width: matches && drawerWidth }}></Mui.Box>
      <Mui.Box
        component={Mui.Stack}
        direction="row"
        // justifyContent="center"
        alignItems="center"
        sx={{ p: { xs: 1, lg: 2 } }}
      >
        {matches !== true ? (
          <Mui.IconButton onClick={handleDrawer}>
            <MuiIcons.Menu />
          </Mui.IconButton>
        ) : (
          ""
        )}
        <Components.Global.Breadcrumbss />
        <Mui.Typography variant="body2" color="common.black"></Mui.Typography>
      </Mui.Box>
    </Mui.AppBar>
  );
};
