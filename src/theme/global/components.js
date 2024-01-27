export const Components = () => ({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "initial",
          // backgroundColor: "#101010",
          // border: "1px solid",
          // color: "#ffffff",
          // "&:hover": {
          //   backgroundColor: "#ffffff",
          //   color: "#000000",
          // },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          "& .MuiPaper-root": {
            borderRadius: "20px",
          },
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          background: "#ffffff",
          color: "#000000",
          flexDirection:"row"
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          whiteSpace: "nowrap",
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiSelect: {
      defaultProps: {
        MenuProps: {
          sx: {
            "& .MuiPaper-root": { bgcolor: "background.default",color:"#000000" },
            maxHeight: 250,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: "pointer",
        },
      },
    },
  },
});
