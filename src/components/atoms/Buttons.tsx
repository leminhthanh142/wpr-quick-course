import React from "react";
import styled from "styled-components/macro";
import LeftArrow from "../sources/LeftArrow";
import RightArrow from "../sources/RightArrow";

interface ButtonProps {
  isPrevButton: boolean;
  position: string;
  className?: string;
  onClick?: any;
}
const Button: React.FC<ButtonProps> = ({
  className,
  position,
  isPrevButton,
  onClick,
}) => (
  <Btn onClick={onClick} className={className} position={position}>
    {isPrevButton ? <LeftArrow /> : <RightArrow />}
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
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 12px 0px;
  transition: 0.2s ease;
  left: ${(props) => props.position};
  transform: translate(-50%, 50%);
  cursor: pointer;
`;
export default Button;
