import * as Formik from "formik";
import * as Mui from "@mui/material";
import * as Components from "src/app/components";

export const SelectField = (props) => (
  <Formik.Field component={MuiSelectField} {...props} />
);

export const MuiSelectField = ({
  label,
  FontColor,
  form: { handleChange, handleBlur, isSubmitting, touched, errors, values },
  field,
  onChange,
  onchangevalue,
  ...props
}) => {
  const error = Boolean(errors[field.name] && touched[field.name]);
  if (field.name === "courseName" || "time") {
    if (onchangevalue) {
      onchangevalue(field);
    }
  }
  return (
    <Components.Form.FieldLabel
      error={error}
      label={label}
      FontColor={FontColor}
    >
      <Mui.Select
      MenuProps={{ PaperProps: { sx: { maxHeight: 500 } } }}
        sx={{
          "& .MuiSelect-select": {
            // backgroundColor: (theme) =>
            //   theme.palette.mode === "dark" ? "" : "#FFFFFF",
          },
          "& fieldset": {
            border: "transparent",
            p: 0,
          },
          "& input,button,svg": {
            zIndex: 1,
            color: (theme) =>
              theme.palette.mode === "dark" ? "#FFFFFF" : "#000000",
          },
          "&:hover fieldset": {
            borderColor: "none",
            color: "#000000",
          },
        }}
        size="small"
        fullWidth
        fullHeight
        error={error}
        disabled={isSubmitting}
        {...field}
        {...props}
        onBlur={handleBlur}
        onChange={onChange || handleChange}
        value={values[field.name]}
      />
      {error && (
        <Mui.FormHelperText error={error}>
          <>{errors[field.name]}</>
        </Mui.FormHelperText>
      )}
    </Components.Form.FieldLabel>
  );
};
