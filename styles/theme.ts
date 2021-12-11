import { lighten } from "polished";
import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    black: "#151A1E",
    accent: "#1A90E5",
    accentUltraLight: "#eef8ff",
    accentDark: "#1776ba",
    placeholder: "#9F9F9F",
    successGreen: "#00ba00",
    lightBorder: lighten(0.9, "#000"),
  },
  size: {
    pageMaxWidthPx: 1200,
    footerHeightPx: 120,
  },
};
