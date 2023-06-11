import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#004c7f ",
    },
    secondary: {
      main: "#888888",
    },
    error: {
      main: "#ff0000",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50",
    },
    background: {
      default: "#36aedc",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
 
});

export default theme;
