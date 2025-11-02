// Global Theme..
import { createTheme } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";

export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    dark: true,
  },
  typography: {
    //fontFamily: "'Roboto Variable', sans-serif",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
  },
});

// Global styles
export const globalStyles = (theme: Theme) => ({
  ":root": {
    "--mplsart-derp": "#ff00ff",
  },
});
