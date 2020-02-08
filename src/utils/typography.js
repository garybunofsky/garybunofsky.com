import Typography from "typography";

const typography = new Typography({
  baseFontSize: "19px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "BlinkMacSystemFont",
    "-apple-system",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  bodyFontFamily: [
    "BlinkMacSystemFont",
    "-apple-system",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ]
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
