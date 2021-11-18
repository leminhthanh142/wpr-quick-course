import React from "react";
import styled from "styled-components/macro";

type ProductCardProps = {
  imgSize: string,
  border?: string
  pageLink: string
  imgLink: string
  content: string
}

export const ProductCard = ({
  imgLink, imgSize, content, pageLink, border,
}: ProductCardProps) => (
  <Container imgSize={imgSize} border={border}>
    <a href={pageLink}>
      <img src={imgLink} alt="card" />
      <p>{content}</p>
    </a>
  </Container>
);

const Container = styled.div<{border?: string, imgSize: string}>`
  flex: 1;
  border: ${(props) => props.border || "none"};
  & a {
    text-decoration: none;
    color: black;
    margin: 0 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  & img {
    width: ${(props) => props.imgSize};
  }
  & p {
    word-wrap: break-word;
    font-size: 0.75em;
    width: 80%;
    margin-top: 4px;
    text-align: center;
  }
`;
