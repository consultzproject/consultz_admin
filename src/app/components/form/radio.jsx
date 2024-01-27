import * as Formik from "formik";
import * as Mui from "@mui/material";

export const RadioGroup = (props) => (
  <Formik.Field component={MuiRadio} {...props} />
);

const MuiRadio = ({
  label,
  form: { touched, errors, values, setFieldValue, ...form },
  field,
  ...props
}) => {
  const error = Boolean(errors[field.name] && touched[field.name]);

  const handleChange = (event) => {
    setFieldValue(field.name, event.target.value);
  };

  return (
    <Mui.Stack spacing={1}>
      <Mui.FormLabel>{label}</Mui.FormLabel>
      <Mui.RadioGroup
        {...field}
        {...form}
        row={props.row}
        value={values[field.name]}
        onChange={handleChange}
      >
        {props.children}
      </Mui.RadioGroup>
      <Mui.FormHelperText
        error={error}
        sx={{ display: error ? "flex" : "none" }}
      >
        <>{errors[field.name]}</>
      </Mui.FormHelperText>
    </Mui.Stack>
  );
};
