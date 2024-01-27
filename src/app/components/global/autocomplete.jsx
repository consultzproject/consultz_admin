import * as Mui from "@mui/material";

export const Autocomplete = ({
  value,
  handleChange,
  selected,
  filters,
  sx,
  label
}) => {
  return (
    <Mui.Select
      size="small"
      value={value}
      onChange={handleChange}
      label={label}
      sx={{
        "& .MuiSelect-select": {
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "" : "#FFFFFF",
        },
        "& fieldset": { borderColor: "#e9eff6 !important" },
        "& input,button,svg": {
          zIndex: 1,
          color: (theme) =>
            theme.palette.mode === "dark" ? "#FFFFFF" : "#000000",
        },
        "&:hover fieldset": {
          borderColor: "#e9eff6 !important",
          color: "#000000",
        },
        ...sx,
      }}
      input={<Mui.OutlinedInput id="select-multiple-chip" label="Chip" />}
      renderValue={(selected) => (
        <Mui.Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
          {selected.map((value) => (
            <Mui.Chip key={value} label={value} sx={{ color: "#000000" }} />
          ))}
        </Mui.Box>
      )}
    >
      {filters.map((filters) => (
        <Mui.MenuItem key={filters} value={filters}>
          {filters}
        </Mui.MenuItem>
      ))}
    </Mui.Select>
  );
};
