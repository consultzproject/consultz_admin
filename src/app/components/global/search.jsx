import * as Mui from "@mui/material";
import * as MuiIcons from '@mui/icons-material';

export const Search = (props,{ sx,placeholder }) => {
  return (
    <Mui.TextField
      sx={{
        fontSize: "12px",
        "& fieldset": {
          borderColor: "#e9eff6 !important",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "" : "#FFFFFF",
        },
        "& input,button,svg,textarea": { zIndex: 1 },
        "&:hover fieldset": { borderColor: "#e9eff6 !important" },
        ...sx,
      }}
      size="small"
      placeholder={placeholder}
      InputProps={{ startAdornment: <MuiIcons.Search sx={{ mr: 1 }} /> }}
      {...props}
    />
  );
};
