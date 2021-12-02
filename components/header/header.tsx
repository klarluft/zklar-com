import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { LogoIcon } from "../icons/logo-icon";

const ContactLink = styled.a`
  margin-left: auto;
  font-size: 16px;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
const StyledLogoIcon = styled(LogoIcon)`
  height: 100%;
`;
const LogoWrapper = styled.a`
  height: 50px;
`;
const ContainerInner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.pageMaxWidthPx}px;
  height: calc(50px + 24px + 24px);
  padding: 24px;
`;
const Container = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Header = () => (
  <Container>
    <ContainerInner>
      <Link href="/" passHref={true}>
        <LogoWrapper>
          <StyledLogoIcon />
        </LogoWrapper>
      </Link>
      <Link href="/contact" passHref={true}>
        <ContactLink>Contact</ContactLink>
      </Link>
    </ContainerInner>
  </Container>
);
