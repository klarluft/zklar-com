import { css } from "styled-components";
import { mediaTabletPortrait } from "./media-queries";

export const googleRecaptchaCss = css`
  .grecaptcha-badge {
    bottom: 500px !important;

    @media ${mediaTabletPortrait} {
      bottom: calc(
        ${({ theme }) => theme.size.footerHeightPx}px + 24px
      ) !important;
    }
  }
`;
