import React from "react";
import * as Mui from "@mui/material";

export const StackLabel = ({
  direction,
  title,
  titleColor,
  label,
  labelColor,
  medium,
  valBold,
}) => (
  <Mui.Stack
    direction={direction || "column"}
    justifyContent="space-between"
    alignItems={direction === "row" ? "center" : undefined}
    spacing={1}
  >
    <Mui.Typography
      variant={medium ? "body2" : "caption"}
      color={titleColor || "text.secondary"}
      noWrap
    >
      {title}
    </Mui.Typography>
    <Mui.Typography
      variant="body2"
      color={`${labelColor}.main`}
      noWrap
      fontWeight={valBold ? "bold" : undefined}
    >
      {label}
    </Mui.Typography>
  </Mui.Stack>
);
