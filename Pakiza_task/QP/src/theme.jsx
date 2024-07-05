import { createTheme } from "@mui/material/styles";

// Import the fonts
import "typeface-manrope";
import "typeface-raleway";
import "typeface-open-sans";
import "typeface-inter";
import "typeface-poppins";

const theme = createTheme({
  palette: {
    primary: {
      main: "#307777",
    },
    secondary: {
      main: "#dc004e",
    },
    navbar: {
      main: "#ffffff",
    },
    card:{
      main: "#ffffff",
    },
    background: {
      default: "#E5E6EC", // Set default background color to white
    },
  },
});

export default theme;
