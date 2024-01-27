// import * as Mui from "@mui/material";
// import * as MuiIcons from "@mui/icons-material";
// import * as ReactError from "react-error-boundary";

// export const ErrorBoundaryProider = (props) => (
//   <ReactError.ErrorBoundary FallbackComponent={ErrorHandler} {...props} />
// );

// const ErrorHandler = ({ error, resetErrorBoundary }) => (
//   <Mui.Stack
//     justifyContent="center"
//     alignItems="center"
//     component={Mui.Container}
//     maxWidth="sm"
//     sx={{ height: "100vh", color: "#fff" }}
//   >
//     <Mui.IconButton sx={{ zIndex: -1, position: "absolute", height: "100%" }}>
//       <MuiIcons.ErrorOutline />
//     </Mui.IconButton>

//     <Mui.Stack component={Mui.CardContent} alignItems="center" spacing={2}>
//       <Mui.Typography variant="h4" color="#000">
//         {error.name}
//       </Mui.Typography>
//       <Mui.Typography variant="h6" color="#000">
//         {error.message}
//       </Mui.Typography>
//       <Mui.Button
//         onClick={resetErrorBoundary}
//         variant="contained"
//         sx={{ width: "fit-content" }}
//       >
//         Try again
//       </Mui.Button>
//     </Mui.Stack>
//   </Mui.Stack>
// );
