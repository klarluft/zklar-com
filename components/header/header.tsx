import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { LogoIcon } from "../icons/logo-icon";
import { mediaTabletPortrait } from "../../styles/media-queries";

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
  height: 40px;

  @media ${mediaTabletPortrait} {
    height: 50px;
  }
`;
const ContainerInner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.size.pageMaxWidthPx}px;
  height: calc(40px + 24px);
  padding: 24px 24px 0 24px;

  @media ${mediaTabletPortrait} {
    height: calc(50px + 24px);
  }
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
      {Number.isNaN(1) ? (
        <Link href="/contact" passHref={true}>
          <ContactLink>Contact</ContactLink>
        </Link>
      ) : null}
    </ContainerInner>
  </Container>
);
