import { createTheme } from "@mui/material/styles";

// Import the fonts
import "typeface-manrope";
import "typeface-raleway";
import "typeface-open-sans";
import "typeface-inter";
import "typeface-poppins";
import "typeface-roboto";



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
      // default: "#E5E6EC", // Set default background color to white
      default: "#000000",
    },
  },
});

export default theme;
