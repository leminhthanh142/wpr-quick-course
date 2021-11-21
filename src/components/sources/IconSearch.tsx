import React from "react";
import styled from "styled-components/macro";

type IconSearchProps = {
  color?: string;
};

export const IconSearch = ({ color }: IconSearchProps) => (
  <IconSearchWrapper color={color}>
    <svg viewBox="0 0 12 12" width="20" height="20" fill="#fff">
      <path d="M11.407,10.421,8.818,7.832a4.276,4.276,0,1,0-.985.985l2.589,2.589a.7.7,0,0,0,.985-.985ZM2.355,5.352a3,3,0,1,1,3,3,3,3,0,0,1-3-3Z" />
    </svg>
  </IconSearchWrapper>
);

const IconSearchWrapper = styled.div`
  position: absolute;
  right: 4px;
  top: 3px;
  height: 34px;
  width: 60px;
  background-color: ${(props) => (props.color ? "#fb5533" : "#d0011b")};
  border-radius: 2px;
  text-align: center;
  line-height: 40px;

  &:hover {
    background-color: #fb6445;
    cursor: pointer;
  }
`;
