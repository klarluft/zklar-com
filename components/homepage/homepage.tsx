import styled from "styled-components";
import { mediaTabletPortrait } from "../../styles/media-queries";
import { Footer } from "../footer";
import { Header } from "../header";
import { NewsletterBanner } from "./newsletter-banner";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  gap: 32px;

  @media ${mediaTabletPortrait} {
    gap: unset;
  }
`;

export const Homepage = () => {
  return (
    <Container>
      <Header />
      <NewsletterBanner />
      <Footer />
    </Container>
  );
};
