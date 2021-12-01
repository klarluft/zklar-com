import React from "react";
import styled from "styled-components";

const LeftSide = styled.div`
  font-size: 14px;
  color: white;

  > a {
    font-weight: 700;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
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
        Made with ❤️ by{" "}
        <a href="https://klarluft.com" target="_blank" rel="noreferrer">
          Klarluft
        </a>
      </LeftSide>
    </ContainerInner>
  </Container>
);
