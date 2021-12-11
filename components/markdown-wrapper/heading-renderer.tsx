import React, { Children, createElement } from "react";
import { HeadingComponent } from "react-markdown/lib/ast-to-react";
import { slugify } from "../../utilities/slugify";

const flatten = (
  text: string,
  child: React.ReactNode | React.ReactNode[]
): string => {
  if (!child) return text;

  if (
    typeof child === "boolean" ||
    typeof child === "string" ||
    typeof child === "number"
  ) {
    return `${text}${child}`;
  }

  if ("props" in child) {
    return Children.toArray(child.props.children).reduce(flatten, text);
  }

  return text;
};

/**
 * HeadingRenderer is a custom renderer
 * It parses the heading and attaches an id to it to be used as an anchor
 * https://github.com/remarkjs/react-markdown/issues/404#issuecomment-604019030
 * @author https://github.com/shyaniv7
 */
export const getHeadingRenderer = (idPrefix: string): HeadingComponent =>
  function HeadingComponent(props) {
    const children = Children.toArray(props.children);
    const text = children.reduce(flatten, "");
    const slug = slugify(text);

    return createElement(
      "h" + props.level,
      { id: idPrefix ? `${idPrefix}-${slug}` : slug },
      props.children
    );
  };

const HEADER_RENDERER_ID_PREFIX = "main-content";

export const getHeadingId = (text: string) => {
  const slug = slugify(text);
  return `${HEADER_RENDERER_ID_PREFIX}-${slug}`;
};

export const HeadingRenderer = getHeadingRenderer(HEADER_RENDERER_ID_PREFIX);
