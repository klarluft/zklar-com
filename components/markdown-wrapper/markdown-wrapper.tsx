/* eslint-disable react/no-children-prop */
import React, { VFC } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { HeadingRenderer } from "./heading-renderer";

const Container = styled.div`
  padding: 24px;

  p,
  li {
    line-height: 1.5;
  }

  a {
    color: ${({ theme }) => theme.color.accent};

    :hover {
      text-decoration: underline;
    }
  }
`;

interface Props {
  className?: string;
  markdown: string;
}

export const MarkdownWrapper: VFC<Props> = ({ className, markdown }) => (
  <Container className={className}>
    <ReactMarkdown
      children={markdown}
      components={{
        h1: HeadingRenderer,
        h2: HeadingRenderer,
        h3: HeadingRenderer,
        h4: HeadingRenderer,
        h5: HeadingRenderer,
        h6: HeadingRenderer,
      }}
    />
  </Container>
);
