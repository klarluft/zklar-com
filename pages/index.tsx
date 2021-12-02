import { ThemeProvider } from "styled-components";
import { Homepage } from "../components/homepage";
import { GlobalStyle } from "../styles/global-style";
import { theme } from "../styles/theme";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Homepage />
      </>
    </ThemeProvider>
  );
}
