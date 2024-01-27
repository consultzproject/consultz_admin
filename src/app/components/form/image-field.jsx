import * as Formik from "formik";
import * as Mui from "@mui/material";
import * as React from "react";
import * as Components from "src/app/components";

export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const ImageField = ({ name, sx, label, disabled, initName, avatar }) => {
  // const [state,]
  const [view, setView] = React.useState(false);
  const { setFieldValue, values, errors, touched, isSubmitting } =
    Formik.useFormikContext();
  const error = Boolean(errors[name] && touched[name]);
  const handleOnChange = async (e) =>
    setFieldValue(name, await toBase64(e.target?.files?.[0]));
  const handleView = () => setView(!view);

  return (
    <Components.Form.FieldLabel error={error} label={label}>
      <Mui.Box
        sx={{ width: "100%", position: "relative" }}
        onClick={handleView}
      >
        <input
          disabled={disabled || isSubmitting}
          hidden
          accept="image/*"
          id={`browse${name}`}
          type="file"
          name={name}
          onChange={!disabled ? handleOnChange : undefined}
        />
        <label
          htmlFor={`browse${name}`}
          style={{ display: "inline-block", width: "inherit" }}
        >
          {avatar ? (
            <Mui.Avatar
              src={
                values[name]
                  ? values[name]
                  : `https://avatars.dicebear.com/api/initials/${initName}.svg`
              }
              sx={{
                cursor: "pointer",
                textAlign: "center",
                objectFit: "cover",
                boxShadow: values[name] && "0px 0px 10px #00000050",
                // border: (theme) =>
                //   Boolean(touched[name] && errors[name])
                //     ? `1px solid ${theme.palette.error.main}`
                //     : values[name]
                //     ? undefined
                //     : `1px solid ${theme.palette.grey[400]}`,
                borderRadius: 4,
                ...sx,
              }}
            />
          ) : (
            <Mui.CardMedia
              component="img"
              src={values[name] ? values[name] : "Assets.KycAddPhoto"}
              sx={{
                borderRadius: 1,
                p: values[name] ? 0 : 10,
                objectFit: values[name] ? "cover" : "contain",
                border: (theme) =>
                  error
                    ? `1px solid ${theme.palette.error.main}`
                    : values[name]
                    ? undefined
                    : `1px solid ${theme.palette.primary.main}`,
                ...sx,
              }}
            />
          )}
        </label>
        {error && (
          <Mui.Typography color="error" variant="caption">
            {errors[name]}
          </Mui.Typography>
        )}
        <Mui.Box
          sx={{
            display: disabled && !avatar ? "block" : "none",
            boxShadow: `0 0 100px rgba(0, 0, 0, 0.26) inset`,
            zIndex: 1,
            position: "absolute",
            height: "100%",
            width: "100%",
            top: 0,
            borderRadius: 1,
          }}
        />
        {view && (
          <Components.Global.FullView
            onClick={handleView}
            src={
              values[name]
                ? values[name]?.includes("base64")
                  ? values[name]
                  : `${import.meta.env.VITE_API_ENCRYPTION}://${
                      import.meta.env.VITE_API_IP
                    }/${values[name]}`
                : `https://avatars.dicebear.com/api/initials/${initName}.svg`
            }
          />
        )}
      </Mui.Box>
    </Components.Form.FieldLabel>
  );
};
