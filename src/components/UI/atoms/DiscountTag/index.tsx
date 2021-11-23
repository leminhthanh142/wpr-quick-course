import React from "react";
import styled from "styled-components";

const DiscountTag: React.FC<{ discount?: number }> = ({ discount }) => (
  <Tag>
    <div>
      <div className="discountRate">
        {" "}
        {discount}
        %
        {" "}
      </div>
      GIẢM
    </div>
  </Tag>
);
export default DiscountTag;
const Tag = styled.div`
  position: absolute;
  text-align:center;
  top: 0;
  right: 0;
  transform: translateX(10%);
  z-index: 1;
  width: 50px;
  height: 50px;
  padding: 3px;
  background: rgba(255, 212, 36);
  color: white;
  & .discountRate {
    color: red;
  }
  & ::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    bottom: -4px;
    left: 0;
    border-style: solid;
    border-color: transparent rgba(255, 212, 36, 0.9);
    border-width: 0 25px 5px;
  }
`;
