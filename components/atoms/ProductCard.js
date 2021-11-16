import React from "react";
import styled from "styled-components";
const ProductCard = (props) => {
  return (
    <Container imgSize={props.imgSize} border={props.border}>
      <a href={props.PageLink}>
        <img src={props.imgLink} alt="card" />
        <p>{props.content}</p>
      </a>
    </Container>
  );
};
export default ProductCard;
const Container = styled.div`
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
