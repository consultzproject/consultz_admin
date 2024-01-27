import * as Mui from "@mui/material";
import * as ReactDOM from "react-dom";

export const customHandlingProvider = ({ children }) => (
  <Mui.Box>
    <Mui.Box id="cutom-handle-boundary" />
    {children}
  </Mui.Box>
);

const SnackBar = ({ message, variant }) => {
  const handleClose = () =>
    ReactDOM.render(<></>, document.getElementById("cutom-handle-boundary"));
  return (
    <Mui.Snackbar
      open={true}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Mui.Alert severity={variant} onClose={handleClose}>
        {message.replace("Firebase: ", "")}
      </Mui.Alert>
    </Mui.Snackbar>
  );
};

export const useCustomHandler = (props) =>
  ReactDOM.render(
    <SnackBar {...props} />,
    document.getElementById("cutom-handle-boundary")
  );
