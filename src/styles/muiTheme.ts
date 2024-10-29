/**
 * theme for MUI
 * TODO: create a theme object as per designs
 */
import { createTheme } from '@mui/material/styles';
// import { purple, green, orange, deepOrange } from "@mui/material/colors";

// Global styles can be moved to a separate file for ease of maintenance.
// const global = {
//   textRight: {
//     textAlign: "right",
//   },
//   mygrey: "rgba(0, 0, 0, 0.5)",
// };

export const dark = () => createTheme({
  palette: {
    mode: 'dark', // Use 'mode' instead of 'type'
    primary: {
      main: "#040f3d",
    },
    secondary: {
      main: "#757575",
    },
  },
  typography: {
    button: {
      // textTransform: "none", // Uncomment to stop transforming button texts to UPPERCASE
    },
  },
  // Define global styles here or in a separate file
});

export const light = () => createTheme({
  palette: {
    mode: 'light', // Use 'mode' instead of 'type'
    primary: {
      main: "#4bffa5",
    },
    secondary: {
      main: "#040f3d",
    },
  },
});
