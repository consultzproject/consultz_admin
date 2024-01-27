import * as MuiLab from "@mui/lab";
import * as Formik from "formik";

export const SubmitButton = (props) => {
  const formikHelpers = Formik.useFormikContext();
  return (
    <MuiLab.LoadingButton
      type="submit"
      fullWidth
      size="medium"
      sx={{ height: 40, borderRadius: 2 }}
      variant="contained"
      loading={formikHelpers?.isSubmitting}
      {...props}
    />
  );
};
