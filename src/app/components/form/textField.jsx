import * as React from "react";
import * as Formik from "formik";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Components from "src/app/components";

export const FormField = (props) => (
  <Formik.Field
    component={props.type === "password" ? MuiPasswordField : MuiTextField}
    {...props}
  />
);

export const MuiTextField = ({
  label,
  name,
  form: { handleChange, handleBlur, touched, errors, values, isSubmitting },
  field,
  FontColor,
  studentlist,
  ...props
}) => {
  const error = Boolean(errors[field.name] && touched[field.name]);
  return (
    <Components.Form.FieldLabel
      error={error}
      label={label}
      FontColor={FontColor}
      helperText={errors[field.name]}
      studentlist = {studentlist}
    >
      <Mui.TextField
        sx={{
          "& fieldset": {
            border: "transparent",
            p: 0,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "" : "#FFFFFF",
          },
          "& input,button,svg,textarea": {
            zIndex: 1,
            pt: 0,
            pl: 0,
            pb: "10px",
          },
          "&:hover fieldset": {
            border: "transparent",
            p: 0,
          },
          "&:active fieldset": {
            border: "transparent",
          },
          "&.Mui-focused fieldset": {
            border: "transparent",
          },
        }}
        autoComplete="off"
        size="medium"
        fullWidth
        error={error}
        // helperText={<>{error && errors[field.name]}</>}
        disabled={isSubmitting}
        {...field}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[field.name]}
        {...props}
      />
    </Components.Form.FieldLabel>
  );
};

export const MuiPasswordField = ({
  label,
  type,
  form: { handleChange, handleBlur, isSubmitting, touched, errors, values },
  field,
  ...props
}) => {
  const error = Boolean(errors[field.name] && touched[field.name]);
  const [visible, setVisible] = React.useState(false);
  const handleVisible = () => setVisible(!visible);
  return (
    <Components.Form.FieldLabel
      error={error}
      label={label}
      helperText={errors[field.name]}
    >
      <Mui.TextField
        sx={{
          "& fieldset": {
            border: "transparent",
            p: 0,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "" : "#FFFFFF",
          },
          "& input,button,svg,textarea": {
            zIndex: 1,
            pt: 0,
            pl: 0,
            pb: "10px",
          },
          "&:hover fieldset": {
            border: "transparent",
            p: 0,
          },
          "&:active fieldset": {
            border: "transparent",
          },
          "&.Mui-focused fieldset": {
            border: "transparent",
          },
        }}
        className="checked"
        autoComplete="off"
        size="medium"
        fullWidth
        type={visible ? "text" : type}
        error={error}
        // helperText={<>{error && errors[field.name]}</>}
        disabled={isSubmitting}
        InputProps={{
          endAdornment: (
            <Mui.InputAdornment
              position="end"
              sx={{ alignItems: "center" }}
              onClick={handleVisible}
            >
              <Mui.IconButton disableRipple>
                {visible ? (
                  <Mui.Typography
                    variant="caption"
                    sx={{ textDecoration: "underline", color: "text.primary" }}
                  >
                    Hide
                  </Mui.Typography>
                ) : (
                  <Mui.Typography
                    color="text.primary"
                    variant="caption"
                    sx={{ textDecoration: "underline" }}
                  >
                    Show
                  </Mui.Typography>
                )}
              </Mui.IconButton>
            </Mui.InputAdornment>
          ),
        }}
        {...field}
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[field.name]}
      />
    </Components.Form.FieldLabel>
  );
};
