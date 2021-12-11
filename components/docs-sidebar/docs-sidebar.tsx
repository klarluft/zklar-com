import React, { useContext, VFC } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { TOP_HEADER_HEIGHT_PX } from "../docs-layout";
import { DocsLayoutContext } from "../docs-layout/docs-layout.context";
import { getHeadingId } from "../markdown-wrapper/heading-renderer";

const SCROLL_OFFSET = -TOP_HEADER_HEIGHT_PX - 24;

const SidebarListItemLink = styled(Link)`
  cursor: pointer;
`;
const SidebarListItem = styled.li`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 0;
  padding: 8px 24px;
  text-indent: 0;
  list-style-type: none;
  font-size: 14px;
  line-height: 1.5;

  :first-child {
    font-weight: 900;
  }
`;
const SidebarList = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0;
  padding: 24px 0;
  text-indent: 0;
  list-style-type: none;
`;

interface Props {
  sections: string[];
}

export const DocsSidebar: VFC<Props> = ({ sections }) => {
  const { setIsSidebarOpen } = useContext(DocsLayoutContext);

  const onLinkClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <SidebarList>
      {sections.map((section) => (
        <SidebarListItem key={section}>
          <SidebarListItemLink
            to={getHeadingId(section)}
            offset={SCROLL_OFFSET}
            smooth={true}
            onClick={onLinkClick}
          >
            {section}
          </SidebarListItemLink>
        </SidebarListItem>
      ))}
    </SidebarList>
  );
};
