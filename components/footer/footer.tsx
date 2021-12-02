import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import styled from "styled-components";

const decodeBase64 = (input: string) => Buffer.from(input, "base64").toString();

const parentCompanyUrl = "aHR0cHM6Ly9rbGFybHVmdC5jb20=";
const parentCompanyName = "S2xhcmx1ZnQ=";
const email = "Y29udGFjdEB6a2xhci5jb20=";
const addressLine1 = "WktsYXIgKEtsYXJsdWZ0KQ==";
const addressLine2 = "R2FsdmFuaXN0cmFhdCA3MDc=";
const addressLine3 = "MzAyOUFELCBSb3R0ZXJkYW0=";
const addressLine4 = "VGhlIE5ldGhlcmxhbmRz";

const Icons = styled.div`
  display: flex;
  gap: 24px;
  margin-left: auto;
  margin-right: 56px;
  color: white;
  font-size: 26px;

  > a:hover {
    color: ${({ theme }) => theme.color.accent};
  }
`;
const RightSideLine = styled.div``;
const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  color: white;
  line-height: 1.2;

  > ${RightSideLine}:first-child {
    font-weight: 700;
    margin-bottom: 8px;
  }
`;
const LeftSideLine = styled.div`
  > a {
    font-weight: 700;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  font-size: 14px;
  color: white;
`;
const ContainerInner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.pageMaxWidthPx}px;
  height: 120px;
  padding: 0 24px;
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
      <LeftSide>
        <LeftSideLine>
          Made with ❤️ by{" "}
          <a
            href={decodeBase64(parentCompanyUrl)}
            target="_blank"
            rel="noreferrer"
          >
            {decodeBase64(parentCompanyName)}
          </a>
        </LeftSideLine>
        <LeftSideLine>
          <a href={`mailto:${email}`}>{decodeBase64(email)}</a>
        </LeftSideLine>
      </LeftSide>
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
      <RightSide>
        <RightSideLine>{decodeBase64(addressLine1)}</RightSideLine>
        <RightSideLine>{decodeBase64(addressLine2)}</RightSideLine>
        <RightSideLine>{decodeBase64(addressLine3)}</RightSideLine>
        <RightSideLine>{decodeBase64(addressLine4)}</RightSideLine>
      </RightSide>
    </ContainerInner>
  </Container>
);
