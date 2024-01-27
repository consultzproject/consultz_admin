import * as Formik from "formik";
import * as Mui from "@mui/material";

export const CheckBox = (props) => (
  <Formik.Field component={MuiCheckBox} {...props} />
);

export const MuiCheckBox = ({
  label,
  form: { touched, errors, values, setFieldValue, ...form },
  field,
  ...props
}) => {
  const error = Boolean(errors[field.name] && touched[field.name]);
  const swicthChange = (event) => {
    setFieldValue(field.name, event.target.checked);
  };
  return (
    <Mui.Stack spacing={1}>
      <Mui.FormControlLabel
        control={
          <Mui.Switch
            {...field}
            {...form}
            {...props}
            checked={Boolean(values[field.name])}
            onChange={swicthChange}
          />
        }
        label={label}
      />
      <Mui.FormHelperText
        error={error}
        sx={{ display: error ? "flex" : "none" }}
      >
        <>{errors[field.name]}</>
      </Mui.FormHelperText>
    </Mui.Stack>
  );
};

export const CheckBoxes = (props) => (
  <Formik.Field component={MuiCheckBoxes} {...props} />
);

export const MuiCheckBoxes = ({
  label,
  form: { touched, errors, ...form },
  field,
  check,
}) => {
  const error = Boolean(errors[field.name] && touched[field.name]);
  return (
    <Mui.Stack spacing={1}>
      <Mui.FormControlLabel
        control={<Mui.Checkbox checked={check} {...field} {...form} />}
        label={label}
      />
      <Mui.FormHelperText
        error={error}
        sx={{ display: error ? "flex" : "none" }}
      >
        {errors[field.name]}
      </Mui.FormHelperText>
    </Mui.Stack>
  );
};
