import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";

export const Content = () => {
  const navigate = Router.useNavigate();
  return (
    <Mui.CardContent
      component={Mui.Stack}
      spacing={2}
      sx={{ height: "90vh", justifyContent: "center", mx: { sm: 2 } }}
    >
      <Mui.Typography variant="h4" fontWeight="bolder">
      SEYAL
      </Mui.Typography>
      <Components.Form.FormField
        label="Email Address"
        name="email"
        type="text"
      />
      <Components.Form.FormField
        label="Password"
        name="password"
        type="password"
      />
      
      <Components.Form.SubmitButton sx={{ fontWeight: "bold" }}>
        Sign In
      </Components.Form.SubmitButton>
    </Mui.CardContent>
  );
};
