import * as React from "react";
import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Layouts from "src/app/layouts";
import * as MuiIcons from "@mui/icons-material";

export const Drawer = () => {
 
  const [open, setOpen] = React.useState(true);
  const navigate = Router.useNavigate();
  const theme = Mui.useTheme();
  const matches = Mui.useMediaQuery(theme.breakpoints.up("md"));
  const drawerWidth = React.useMemo(() => (open ? 250 : 60), [open, matches]);
  React.useEffect(() => {
    setOpen(matches ? true : false);
  }, [matches]);

  const handleDrawer = () => setOpen(!open);


 

  return (
    <>
      <Layouts.Main.Views.AppBarr
        matches={matches}
        handleDrawer={handleDrawer}
        drawerWidth={drawerWidth}
      />
      <Mui.Grid container spacing={2}>
        <Mui.Grid item xs={open ? 2 : 0}>
          <Mui.Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ p: 2, ml: 2, mb: -9, zIndex: 1000 }}
          >
            {matches !== true ? (
              <Mui.IconButton onClick={handleDrawer} sx={{ mt: -2 }}>
                <MuiIcons.Menu />
              </Mui.IconButton>
            ) : (
              ""
            )}
          </Mui.Stack>

          <Mui.Drawer
            variant={matches ? "permanent" : "temporary"}
            open={open}
            onClose={handleDrawer}
            PaperProps={{
              sx: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "100vh",
                borderRight: "none",
                zIndex: (theme) => theme.zIndex.appBar + 1,
                width: drawerWidth,
                overflow: "hidden",
                transition: "ease 0.5s",
                color: "#FFFFFF",
              },
            }}
          >
            <Mui.List sx={{ pt: 0 }}>
              <Mui.ListItem sx={{ p: 1 }}>
                {matches === true ? (
                  <Mui.IconButton
                    onClick={handleDrawer}
                    sx={{ alignItems: "center" }}
                  >
                    {open !== true ? (
                      <MuiIcons.KeyboardDoubleArrowRight />
                    ) : (
                      <MuiIcons.KeyboardDoubleArrowLeft />
                    )}
                  </Mui.IconButton>
                ) : (
                  ""
                )}
              </Mui.ListItem>
            </Mui.List>
            <Mui.Stack
              direction={open !== true ? "column" : "row"}
              justifyContent="space-around"
              alignItems="center"
            >
            
          
            </Mui.Stack>
            <Layouts.Main.Views.SideBar open={open} />
            <Mui.Box flexGrow={2} />
            <Mui.Stack
              direction={open !== true ? "column" : "row"}
              justifyContent="space-around"
              alignItems="center"
            >
              <Mui.Box>
                {open === true ? (
                  <Mui.Button
                    size="small"
                    variant="contained"
                    onClick={() => navigate("/logout")}
                  >
                    Logout
                  </Mui.Button>
                ) : (
                  <Mui.IconButton onClick={() => navigate("/logout")}>
                    <MuiIcons.Logout />
                  </Mui.IconButton>
                )}
              </Mui.Box>
              {/* <Mui.Badge badgeContent={notificationCount} color="primary">
              <NotificationsIcon
                sx={{ color: "secondary.main", cursor: "pointer" }}
                onClick={() => navigate("/admin/notification")}
              />
                </Mui.Badge> */}
              <Layouts.Main.Views.ThemeSwitch />
            </Mui.Stack>
          </Mui.Drawer>
        </Mui.Grid>

        <Mui.Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "100vh",
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "" : "RGB(245,246,248)",
            pl: { xs: 2, md: 4 },
            pr: { xs: 2, md: 4 },
            width: { xs: "100vw", md: `calc(100% - ${drawerWidth}px)` },
            ml: { xs: "auto", md: `${drawerWidth}px` },
            pt: 8,
            pb: 2,
          }}
        >
          <Router.Outlet />
        </Mui.Box>
      </Mui.Grid>
    </>
  );
};
