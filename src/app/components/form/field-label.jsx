import * as Mui from "@mui/material";
import * as React from "react";

export const FieldLabel = ({
  children,
  label,
  error,
  FontColor,
  helperText,
  studentlist
}) => (
  <Mui.Stack>
    <Mui.Stack
      sx={{
        width: "100%",
        p: "18px 15px 18px 15px",
        border: studentlist ? 0: error ? "0.5px solid red" : "0.5px solid #C3C3C3",
        borderRadius: "18px",
      }}
    >
      <Mui.FormLabel
        sx={{ color: "text.primary", fontSize: "14px", fontWeight: 700 }}
        error={error}
      >
        {label}
      </Mui.FormLabel>
      {children}
    </Mui.Stack>
    {error && (
      <Mui.Typography variant="caption" color="red" ml={2}>
        {helperText}
      </Mui.Typography>
    )}
  </Mui.Stack>
);
