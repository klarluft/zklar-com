import Link from "next/link";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useLocalStorage } from "../../utilities/use-local-storage";
import { mediaTabletPortrait } from "../../styles/media-queries";
import { PRIVACY_POLICY_LINK } from "../../utilities/configuration";

const CONTAINER_WIDTH_PX = 640;
const CONTAINER_HEIGHT_PX = 126;
const CONTAINER_INNER_HEIGHT_PX = 86;
const SHOW_BANNER_DELAY_MS = 1000;

const CloseIcon = styled.div`
  display: flex;
  align-items: center;
  height: ${CONTAINER_INNER_HEIGHT_PX}px;
  padding: 0 16px;
  position: absolute;
  right: 0px;
  font-size: 24px;
  cursor: pointer;

  :hover {
    padding: 0 24px;
    color: ${({ theme }) => theme.color.accent};
  }

  @media ${mediaTabletPortrait} {
    padding: 0 24px;
  }
`;
const ContainerInner = styled.div`
  position: relative;
  width: 100%;
  height: ${CONTAINER_INNER_HEIGHT_PX}px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.color.black};
  font-size: 12px;

  span {
    width: 234px;
  }

  a {
    text-decoration: underline;

    :hover {
      color: ${({ theme }) => theme.color.accent};
    }
  }

  @media ${mediaTabletPortrait} {
    font-size: 16px;

    span {
      width: 392px;
    }
  }
`;
const Container = styled.div<{ $isShown: boolean }>`
  position: fixed;
  opacity: 0;
  bottom: -${CONTAINER_HEIGHT_PX}px;
  bottom: ${({ $isShown }) =>
    $isShown
      ? `calc(${CONTAINER_INNER_HEIGHT_PX}px - ${CONTAINER_HEIGHT_PX}px)`
      : ""};
  opacity: ${({ $isShown }) => ($isShown ? "1" : "0")};
  left: 0;
  width: calc(100% - 24px - 24px);
  height: ${CONTAINER_HEIGHT_PX}px;
  margin-left: 24px;
  display: flex;
  align-items: flex-start;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 24px -4px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease-in-out;

  @media ${mediaTabletPortrait} {
    align-items: flex-end;
    top: -${CONTAINER_HEIGHT_PX}px;
    top: ${({ $isShown }) =>
      $isShown
        ? `calc(${CONTAINER_INNER_HEIGHT_PX}px - ${CONTAINER_HEIGHT_PX}px)`
        : ""};
    bottom: unset;
    left: 50%;
    width: ${CONTAINER_WIDTH_PX}px;
    padding: 0;
    margin-left: calc(${CONTAINER_WIDTH_PX}px / 2 * -1);
  }
`;

export const CookieBanner = () => {
  const [isLoadedInBrowser, setIsLoadedInBrowser] = useState(false);
  const [cookieConsent, setCookieConsent] = useLocalStorage(
    "cookieConsent",
    false
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const timeout = setTimeout(
        () => setIsLoadedInBrowser(true),
        SHOW_BANNER_DELAY_MS
      );

      return () => clearTimeout(timeout);
    }
  }, []);

  const isBannerShown = isLoadedInBrowser && !cookieConsent;

  const handleCloseIconClick = useCallback(() => {
    setCookieConsent(true);
  }, [setCookieConsent]);

  return (
    <Container $isShown={isBannerShown}>
      <ContainerInner>
        <span>
          To make this website work, we use cookies. By using it, you agree to
          our{" "}
          <Link href={PRIVACY_POLICY_LINK} passHref={true}>
            <a>Privacy Policy</a>
          </Link>
          , including cookie policy.
        </span>
        <CloseIcon onClick={handleCloseIconClick}>
          <FontAwesomeIcon icon={faTimes} />
        </CloseIcon>
      </ContainerInner>
    </Container>
  );
};
