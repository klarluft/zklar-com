import React from "react";
import styled from "styled-components";
import { PaymentsBannerIcon } from "../icons/payments-banner-icon";
import { NewsletterForm } from "./newsletter-form";

const Header2 = styled.h2`
  font-size: 32px;
  font-weight: 400;
  margin: 0 0 38px 0;
`;
const Header1 = styled.h1`
  font-size: 52px;
  font-weight: 900;
  margin: 0 0 18px 0;
`;
const StyledPaymentsBannerIcon = styled(PaymentsBannerIcon)`
  width: 100%;
`;
const RightSide = styled.div`
  flex-basis: 50%;
`;
const LeftSide = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ContainerInner = styled.div`
  display: flex;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.pageMaxWidthPx}px;
  padding: 0 24px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const NewsletterBanner = () => (
  <Container>
    <ContainerInner>
      <LeftSide>
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
      </LeftSide>
      <RightSide>
        <StyledPaymentsBannerIcon />
      </RightSide>
    </ContainerInner>
  </Container>
);
