import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { FC, useCallback, useMemo, useState, VFC } from "react";
import styled from "styled-components";
import { mediaTabletLandscape } from "../../styles/media-queries";
import { LogoIcon } from "../icons/logo-icon";
import { DocsLayoutContext } from "./docs-layout.context";

export const TOP_HEADER_HEIGHT_PX = 60;
export const MENU_SIDEBAR_WIDTH_PX = 260;

interface Props {
  Sidebar?: VFC;
}

const LeftSidebarWrapper = styled.div<{ $isSidebarOpen: boolean }>`
  position: fixed;
  top: ${TOP_HEADER_HEIGHT_PX}px;
  left: ${({ $isSidebarOpen }) =>
    $isSidebarOpen ? "0" : `-${MENU_SIDEBAR_WIDTH_PX}px`};
  width: ${MENU_SIDEBAR_WIDTH_PX}px;
  height: calc(100vh - ${TOP_HEADER_HEIGHT_PX}px);
  overflow-y: auto;
  transition: left 0.3s ease-in-out;
  background: white;
  border-right: 1px solid ${({ theme }) => theme.color.lightBorder};

  @media ${mediaTabletLandscape} {
    left: 0;
  }
`;
const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  width: 68px;
  height: 100%;
`;
const BurgerButton = styled.div`
  font-size: 24px;
  line-height: 1;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;

  @media ${mediaTabletLandscape} {
    display: none;
  }
`;
const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${TOP_HEADER_HEIGHT_PX}px;
  display: flex;
  align-items: center;
  gap: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightBorder};
  padding: 0 24px;
  background-color: white;
`;
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 820px;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: ${TOP_HEADER_HEIGHT_PX}px;
`;
const Container = styled.div`
  @media ${mediaTabletLandscape} {
    margin-left: ${MENU_SIDEBAR_WIDTH_PX}px;
  }
`;

export const DocsLayout: FC<Props> = ({ children, Sidebar }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleBurgerButtonClick = useCallback(() => {
    setIsSidebarOpen((previous) => !previous);
  }, []);

  const contextValue = useMemo(
    () => ({ isSidebarOpen, setIsSidebarOpen }),
    [isSidebarOpen]
  );

  return (
    <DocsLayoutContext.Provider value={contextValue}>
      <Container>
        <LeftSidebarWrapper $isSidebarOpen={isSidebarOpen}>
          {Sidebar ? <Sidebar /> : null}
        </LeftSidebarWrapper>
        <ContentWrapper>{children}</ContentWrapper>
        <HeaderWrapper>
          <BurgerButton
            role="button"
            tabIndex={0}
            onClick={handleBurgerButtonClick}
          >
            <FontAwesomeIcon icon={faBars} />
          </BurgerButton>
          <Link href="/" passHref={true}>
            <LogoWrapper>
              <LogoIcon />
            </LogoWrapper>
          </Link>
        </HeaderWrapper>
      </Container>
    </DocsLayoutContext.Provider>
  );
};
