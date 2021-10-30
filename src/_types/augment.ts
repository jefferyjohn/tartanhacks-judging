/**
 * Augment the Material-UI styles type to support
 * our custom additional colors in the theme
 */
import { Theme } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    gradient?: {
      start: string;
      end: string;
    };
    waveGradient?: {
      start: string;
      end: string;
    };
    lightGradient?: {
      start: string;
      end: string;
    };
    textColorDark?: {
      start: string;
      end: string;
    };
  }

  interface Palette {
    gradient: {
      start: string;
      end: string;
    };
    waveGradient: {
      start: string;
      end: string;
    };
    lightGradient: {
      start: string;
      end: string;
    };
    textColorDark: {
      main: string;
    };
  }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true;
    tablet: true;
    desktop: true;
  }
}

declare module "@mui/styles" {
  interface DefaultTheme extends Theme {}
}

export {};
