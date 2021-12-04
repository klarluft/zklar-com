import React from "react";
import styled from "styled-components";
import { mediaTabletPortrait } from "../../styles/media-queries";
import { PaymentsBannerIcon } from "../icons/payments-banner-icon";
import { NewsletterForm } from "./newsletter-form";

const Header2 = styled.h2`
  font-size: 18px;
  font-weight: 400;
  margin: 0 0 38px 0;

  @media ${mediaTabletPortrait} {
    font-size: 32px;
  }
`;
const Header1 = styled.h1`
  font-size: 28px;
  font-weight: 900;
  margin: 0 0 18px 0;

  @media ${mediaTabletPortrait} {
    font-size: 52px;
  }
`;
const StyledPaymentsBannerIcon = styled(PaymentsBannerIcon)`
  width: 100%;
`;
const Banner = styled.div`
  padding: 0 24px;

  @media ${mediaTabletPortrait} {
    padding: 0;
    flex-basis: 50%;
  }
`;
const Text = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media ${mediaTabletPortrait} {
    text-align: left;
  }
`;
const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ theme }) => theme.size.pageMaxWidthPx}px;
  padding: 0 24px;

  @media ${mediaTabletPortrait} {
    flex-direction: row-reverse;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const NewsletterBanner = () => (
  <Container>
    <ContainerInner>
      <Banner>
        <StyledPaymentsBannerIcon />
      </Banner>
      <Text>
        <Header1>
          Private, fast and cheap
          <br />
          Ethereum transactions
        </Header1>
        <Header2>
          Secure blockchain payment technology
          <br />
          powered by zero-knowledge proofs
        </Header2>
        <NewsletterForm />
      </Text>
    </ContainerInner>
  </Container>
);
