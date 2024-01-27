import * as Mui from "@mui/material";
import * as Components from "src/app/components";

export const Cirular = ({ sx }) => {
  return (
    <Mui.Box
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        alignItems: "center",
        ...sx,
      }}
    >
      <Mui.Stack direction="row" justifyContent="center" alignItems="center">
        <Components.Temp.Loader />
      </Mui.Stack>
    </Mui.Box>
  );
};
