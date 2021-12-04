import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      black: string;
      accent: string;
      accentUltraLight: string;
      accentDark: string;
      placeholder: string;
      successGreen: string;
    };
    size: {
      pageMaxWidthPx: number;
      footerHeightPx: number;
    };
  }
}
