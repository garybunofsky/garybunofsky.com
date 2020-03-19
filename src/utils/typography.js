import Typography from "typography";

const typography = new Typography({
  baseFontSize: "17px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Inter",
      styles: ["400"]
    }
  ],
  headerFontFamily: [
    "Inter",
    "-apple-system",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  bodyFontFamily: [
    "Inter",
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
