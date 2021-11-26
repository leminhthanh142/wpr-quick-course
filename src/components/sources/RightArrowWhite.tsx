import React from "react";
import styled from "styled-components";

const RightArrowWhite = () => (
  <ArrowWhite>
    <svg
      enableBackground="new 0 0 13 21"
      viewBox="0 0 13 21"
      x="0"
      y="0"
      className="shopee-svg-icon icon-arrow-right-bold"
    >
      <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
    </svg>
  </ArrowWhite>
);
export default RightArrowWhite;
export const ArrowWhite = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    height: 0.625rem;
    width: 0.625rem;
    transition: 0.2s ease;
    fill: white;
  }
`;
