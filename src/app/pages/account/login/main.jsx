import React from "react";
import * as Api from "src/api";
import * as Formik from "formik";
import * as Pages from "src/app/pages";
import * as Router from "react-router-dom";
import * as Contexts from "src/app/contexts";
import * as Providers from "src/app/providers";

export const Main = () => {
  const navigate = Router.useNavigate();
  const handler = Providers.useCustomHandler;
  const user = React.useContext(Contexts.UserContext);
  const Submit = async (e, { setSubmitting }) => {
    Api.Server.Request("login", { email: e.email, password: e.password })
      .then((res) => {
        if (res?.error === true) {
          handler({ message: res?.message, variant: "error" });
        } else {
          handler({ message: res?.message, variant: "success" });
          // user?.update();
          navigate("/admin/dashboard");
        }
      })
      .catch((err) => {
        if (err) {
          handler({ message: err.message, variant: "error" });
        }
      })
      .finally(() => {
        setSubmitting(false);
      });
  };
  return (
    <>
      <Formik.Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={Submit}
      >
        {() => (
          <Formik.Form>
            <Pages.Account.Login.Views.Content />
          </Formik.Form>
        )}
      </Formik.Formik>
      <Router.Outlet />
    </>
  );
};
