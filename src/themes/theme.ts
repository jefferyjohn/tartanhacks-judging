import { createTheme } from "@mui/material"
import { lightGreen } from "@mui/material/colors"

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F3964A"
    },
    secondary: {
      main: lightGreen[100]
    },
    gradient: {
      start: "#AA5418",
      end: "#F6C744"
    },
    waveGradient: {
      start: "#F6C744",
      end: "#F68F44"
    },
    lightGradient: {
      start: "#FFFFFF",
      end: "#FFE3E3"
    },
    text: {
      primary: "#AA5418",
      secondary: "#F3964A"
    }
  },
  typography: {
    fontFamily: "Poppins, Roboto, sans-serif"
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 450,
      tablet: 800,
      desktop: 1200
    }
  }
})
