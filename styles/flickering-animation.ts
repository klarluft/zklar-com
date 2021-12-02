import { keyframes } from "styled-components";

export const flickeringAnimation = keyframes`
  0% {
    opacity:1;
  }

  50% {
    opacity:0;
  }

  100% {
    opacity:1;
  }
}
`;
