import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import styled from "styled-components";
import { mediaTabletPortrait } from "../../styles/media-queries";
import Link from "next/link";
import {
  PRIVACY_POLICY_LINK,
  TERMS_OF_SERVICE_LINK,
} from "../../utilities/configuration";

const decodeBase64 = (input: string) => Buffer.from(input, "base64").toString();

const parentCompanyUrl = "aHR0cHM6Ly9rbGFybHVmdC5jb20=";
const parentCompanyName = "S2xhcmx1ZnQ=";
const email = "Y29udGFjdEB6a2xhci5jb20=";

const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  color: white;
  font-size: 26px;
  min-height: 120px;

  > a:hover {
    color: ${({ theme }) => theme.color.accent};
  }

  @media ${mediaTabletPortrait} {
    order: 2;
    margin-left: auto;
    margin-right: 48px;
    min-height: unset;
  }
`;
const LinksLine = styled.a`
  line-height: 1;
  :hover {
    text-decoration: underline;
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 14px;
  color: white;
  line-height: 1.2;
  text-align: center;
  height: 120px;

  @media ${mediaTabletPortrait} {
    order: 3;
    text-align: left;
  }
`;
const MadeByLine = styled.div`
  > a {
    font-weight: 700;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;
const MadeBy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  font-size: 14px;
  color: white;
  height: 120px;
  text-align: center;

  @media ${mediaTabletPortrait} {
    order: 1;
    height: unset;
    text-align: left;
  }
`;
const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.size.pageMaxWidthPx}px;
  padding: 0 24px;

  @media ${mediaTabletPortrait} {
    flex-direction: row;
    height: ${({ theme }) => theme.size.footerHeightPx}px;
  }
`;
const Container = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.color.black};
`;

export const Footer = () => (
  <Container>
    <ContainerInner>
      <Icons>
        <a href="https://t.me/zklarcom" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a href="https://twitter.com/zklarcom" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>

        <a href="https://github.com/klarluft" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Icons>
      <Links>
        <Link href={TERMS_OF_SERVICE_LINK} passHref={true}>
          <LinksLine>Terms of Service</LinksLine>
        </Link>
        <Link href={PRIVACY_POLICY_LINK} passHref={true}>
          <LinksLine>Privacy Policy</LinksLine>
        </Link>
      </Links>
      <MadeBy>
        <MadeByLine>
          Made with ❤️ by{" "}
          <a
            href={decodeBase64(parentCompanyUrl)}
            target="_blank"
            rel="noreferrer"
          >
            {decodeBase64(parentCompanyName)}
          </a>
        </MadeByLine>
        <MadeByLine>
          <a href={`mailto:${email}`}>{decodeBase64(email)}</a>
        </MadeByLine>
      </MadeBy>
    </ContainerInner>
  </Container>
);
