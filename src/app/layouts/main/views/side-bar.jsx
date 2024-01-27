import React from "react";
import * as Mui from "@mui/material";
import * as Constants from "src/constants";
import * as Router from "react-router-dom";
import * as MuiIcons from "@mui/icons-material";

export const SideBar = ({ open }) => {
 
  const { pathname } = Router.useLocation();
  const navigate = Router.useNavigate();

  return (
    <>
      <Mui.List>
        {Constants.MenuList.map((text, index) => {
          const path = pathname.includes(
            text
              .toLowerCase()
              .replace(" ", "_")
              .replace("/", "_")
              .replace("_", "-")
          );
          return (
            <Mui.Box key={index}>
              <Mui.ListItem
                button
                component={Router.Link}
                to={text
                  .toLowerCase()
                  .replace(" ", "-")
                  .replace("/", "-")
                  .replace("_", "-")}
                sx={
                  path
                    ? {
                        color: "primary.main",
                        borderRadius: 0,
                        fontWeight: "bolder",
                        mt: -0.5,
                      }
                    : { color: "text.secondary" }
                }
              >
                <Mui.ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {
                    {
                      Dashboard: (
                        <MuiIcons.Dashboard
                          color={path ? "primary" : undefined}
                        />
                      ),
                      User_Management: (
                        <MuiIcons.PeopleAlt
                          color={path ? "primary" : undefined}
                        />
                      ),
                    
                    }[text]
                  }
                </Mui.ListItemIcon>
                <Mui.ListItemText
                  primary={
                    <Mui.Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ ml: -1.5, fontSize: "12px" }}
                    >
                      {text.replace("_", " ")}
                   
                      {/* {Boolean(Constants.RIGHTSMENUS[text]) && (
                        <Mui.IconButton
                          component={Router.Link}
                          to="posts/create"
                        >
                          <MuiIcons.AddRounded />
                        </Mui.IconButton>
                      )} */}
                    </Mui.Stack>
                  }
                  sx={{
                    opacity: open ? 1 : 0,
                    color: path ? "primary.main" : undefined,
                  }}
                />
              </Mui.ListItem>
              {Boolean(Constants.RIGHTSMENUS[text]) && path && (
                <Mui.List sx={{ pl: 3 }}>
                  {Constants.RIGHTSMENUS[text].map((subtext, subindex) => {
                    const subpath = pathname.includes(
                      subtext
                        .toLowerCase()
                        .replace(" ", "_")
                        .replace("/", "_")
                        .replace("_", "-")
                    );
                    return (
                      <Mui.ListItem
                        button
                        component={Router.Link}
                        to={`${text
                          .toLowerCase()
                          .replace(" ", "_")
                          .replace("_", "-")
                          .replace("/", "_")}/${subtext
                          .toLowerCase()
                          .replace(" ", "_")
                          .replace("/", "_")}`}
                        key={subindex}
                        sx={
                          subpath
                            ? {
                                color: "primary.main",
                                borderRadius: 0,
                                fontWeight: "bolder",
                                mt: -0.5,
                              }
                            : { color: "text.secondary" }
                        }
                      >
                        <Mui.ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 1 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {
                            {
                              Student: (
                                <MuiIcons.PeopleAlt
                                  color={subpath ? "primary" : undefined}
                                />
                              ),
                              Tutor: (
                                <MuiIcons.MenuBook
                                  color={subpath ? "primary" : undefined}
                                />
                              ),
                            }[subtext]
                          }
                        </Mui.ListItemIcon>
                        <Mui.ListItemText
                          primary={
                            <Mui.Stack
                              direction="row"
                              justifyContent="space-between"
                              sx={{ fontSize: "12px" }}
                            >
                              {subtext}
                            </Mui.Stack>
                          }
                          sx={{
                            opacity: open ? 1 : 0,
                            color: subpath ? "primary.main" : undefined,
                          }}
                        />
                      </Mui.ListItem>
                    );
                  })}
                </Mui.List>
              )}
            </Mui.Box>
          );
        })}
      </Mui.List>
    </>
  );
};
