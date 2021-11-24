import React from "react";
import styled from "styled-components/macro";
import LeftArrow from "../../../sources/LeftArrow";
import RightArrow from "../../../sources/RightArrow";

interface ButtonProps {
  onClick?: any;
}
export const NextButton = ({ onClick }: ButtonProps) => (
  <Btn className="btn" position="100%" onClick={onClick}>
    <RightArrow />
  </Btn>
);
export const PrevButton = ({ onClick }: ButtonProps) => (
  <Btn className="btn" position="0" onClick={onClick}>
    <LeftArrow />
  </Btn>
);
const Btn = styled.div<{ position: string }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: gray;
  opacity: 1;
  visibility: visible;
  top: 50%;
  width: 30px;
  height: 30px;
  font-size: 20px;
  border-radius: 50%;
  box-shadow: rgb(0 0 0 / 12%) 0 1px 12px 0;
  transition: 0.2s ease;
  left: ${(props) => props.position};
  transform: translate(-50%,0);
  cursor: pointer;
  z-index: 1;
`;
