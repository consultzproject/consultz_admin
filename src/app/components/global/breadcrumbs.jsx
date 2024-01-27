import React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";

export const Breadcrumbss = (props) => {
  const { pathname } = Router.useLocation();
  const navigate = Router.useNavigate();
  const pathnames = pathname.split("/").filter((x) => x);

  const PathChange = (e, index) => {
    const routeto = `/admin/posts/${e}`;
    const routeto1 = `/admin/${e}`;
    if (e === "create") {
      navigate(routeto);
    } else {
      navigate(routeto1);
    }
  };

  return (
    <div>
      <Mui.Grid item >
        <Mui.Breadcrumbs
          maxItems={3}
          separator={<MuiIcons.KeyboardArrowRight fontSize="small" />}
          aria-label="breadcrumb"
          style={{
            textTransform: "capitalize",
            alignItems: "center",
          }}
        >
          {pathnames.slice(1).map((name, index) => {
            const routeto = `/${pathnames.slice(0, index + 1).join("/")}`;
            return (
              <Mui.Typography
                component={Mui.Box}
                // onClick={() => PathChange(name)}
                key={index}
                sx={{
                  fontSize: "16px",
                  textDecoration: "none",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {name}
              </Mui.Typography>
            );
          })}
        </Mui.Breadcrumbs>
      </Mui.Grid>
    </div>
  );
};
