import * as Mui from "@mui/material";

export const FieldsCard = ({ children, sx, ...props }) => (
  <Mui.Box
    sx={{
      bgcolor: (theme) =>
        theme.palette.mode === "dark" ? "#010101" : theme.palette.grey[100],
      p: 4,
      borderRadius: 1,
      overflow: "hidden",
      width: "100%",
      ...sx,
    }}
    {...props}
  >
    {children}
  </Mui.Box>
);
