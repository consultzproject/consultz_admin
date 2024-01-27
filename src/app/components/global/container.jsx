import * as Mui from "@mui/material";

export const Container = ({ children, sx, ...props }) => (
  <Mui.Paper
    elevation={0}
    sx={{
      p: 2,
      borderRadius: 2,
      overflow: "hidden",
      width: "100%",
      bgcolor: (theme) => (theme.palette.mode === "dark" ? "" : "#ffffff"),
      ...sx,
    }}
    {...props}
  >
    {children}
  </Mui.Paper>
);
