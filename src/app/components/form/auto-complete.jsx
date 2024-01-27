import React from "react";
import * as Formik from "formik";
import * as Mui from "@mui/material";
import * as Components from "src/app/components";

export const AutoCompleteField = (props) => (
  <Formik.Field
    component={props.freeSolo ? MuiTagsInput : MuiAutoCompleteField}
    {...props}
  />
);

export const MuiAutoCompleteField = ({
  label,
  FontColor,
  field,
  onChange,
  option,
  onSelect,
  place,
  loading,
  ...props
}) => {
  const { setFieldValue, errors, touched } = Formik.useFormikContext();
  const error = Boolean(errors[field?.name] && touched[field?.name]);

  const handleOnChange = (event, newValue) => {
    setFieldValue(field?.name, props.multiple ? newValue : newValue.id);
  };

  return (
    <Components.Form.FieldLabel
      error={error}
      label={label}
      FontColor={FontColor}
    >
      <Mui.Autocomplete
        id="combo-box-demo"
        onChange={handleOnChange}
        options={option}
        getOptionLabel={(option) => option?.name}
        onInputChange={(event, newInputValue) => {
          onSelect(newInputValue);
        }}
        size="medium"
        sx={{
          "& .MuiAutocomplete-inputRoot": {
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
            color: (theme) =>
              theme.palette.mode === "dark" ? "#FFFFFF" : "#000000",
          },
        }}
        fullWidth
        {...props}
        renderInput={(params) => (
          <Mui.TextField
            {...params}
            placeholder={place}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <Mui.CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
      {error && (
        <Mui.FormHelperText error={error}>
          <>{errors[field?.name]}</>
        </Mui.FormHelperText>
      )}
    </Components.Form.FieldLabel>
  );
};

export const MuiTagsInput = ({
  label,
  FontColor,
  field,
  onChange,
  option,
  onSelect,
  place,
  loading,
  ...props
}) => {
  const { setFieldValue, values, errors, touched, isSubmitting } =
    Formik.useFormikContext();
  const error = Boolean(errors[field?.name] && touched[field?.name]);

  // const [value, setValue] = React.useState<string[]>(
  //   option.length > 0 ? [option[0].name] : []
  // );
  const [inputValue, setInputValue] = React.useState("");

  const handleChange = (event, newValue) => {
    // setValue(newValue);
    setFieldValue(field.name, newValue);
  };

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  };

  return (
    <Components.Form.FieldLabel
      error={error}
      label={label}
      FontColor={FontColor}
    >
      <Mui.Autocomplete
        multiple
        freeSolo
        sx={{
          "& .MuiAutocomplete-inputRoot": {
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
            color: (theme) =>
              theme.palette.mode === "dark" ? "#FFFFFF" : "#000000",
          },
        }}
        size="medium"
        value={values[field?.name]}
        inputValue={inputValue}
        onChange={handleChange}
        onInputChange={handleInputChange}
        options={option.map((option) => option.name || option)}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Mui.Chip
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => <Mui.TextField {...params} />}
        {...props}
      />
      {error && (
        <Mui.FormHelperText error={error}>
          <>{errors[field?.name]}</>
        </Mui.FormHelperText>
      )}
    </Components.Form.FieldLabel>
  );
};
