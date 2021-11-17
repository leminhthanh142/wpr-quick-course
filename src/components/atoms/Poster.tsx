import React from "react";
import styled from "styled-components/macro";

type PosterProps = {
  margin?: string
  imgLink: string
  posterHeight: string
  directTo: string
}

export const Poster = ({
  margin, imgLink, posterHeight, directTo,
}: PosterProps) => (
  <Container
    margin={margin}
    img={imgLink}
    height={posterHeight}
  >
    <a href={directTo}>
      <div className="overlay" />
    </a>
  </Container>
);

const Container = styled.div<{height: string, margin?: string, img: string}>`
  width: 100%;
  height: ${(props) => props.height};
  min-height: 50%;
  position: relative;
  border-radius: 5px;
  margin: ${(props) => props.margin};
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  & a {
    display: block;
  }
  & .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.15s linear;
    background-color: rgba(255, 255, 255, 0.15);
  }
  &:hover .overlay {
    opacity: 1;
  }
`;
