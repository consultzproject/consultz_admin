import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";
import * as MuiIcons from "@mui/icons-material";

export const PageNotFound = () => (
  <Mui.Stack
    direction="row"
    spacing={2}
    alignItems="center"
    justifyContent="center"
    sx={{ height: "100vh", position: "relative", overflow: "hidden" }}
  >
    <MuiIcons.Error fontSize="large" />
    <Mui.Typography variant="h5" fontWeight="bolder" textAlign="center">
      Page Not Found
    </Mui.Typography>
  </Mui.Stack>
);
