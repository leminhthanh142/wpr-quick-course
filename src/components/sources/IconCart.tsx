import styled from "styled-components/macro";
import React from "react";

export const IconCart = () => (
  <Container>
    <svg viewBox="0 0 26.6 25.6">
      <polyline
        fill="none"
        points="2 1.7 5.5 1.7 9.6 18.3 21.2 18.3 24.6 6.1 7 6.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2.5"
      />
      <circle cx="10.7" cy="23" r="2.2" stroke="none" />
      <circle cx="19.7" cy="23" r="2.2" stroke="none" />
    </svg>
  </Container>
);
const Container = styled.a`
  & svg {
    display: inline-block;
    fill: currentColor;
    width: 26px;
    height: 26px;
    cursor: pointer;
    color: white;
    stroke: white;
  }
`;
