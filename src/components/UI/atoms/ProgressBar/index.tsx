import React from "react";
import styled from "styled-components/macro";

interface BarProps {
  productSold: number;
  productTotal: number;
}
export const ProgressBar = ({ productSold, productTotal }: BarProps) => {
  const progress: number = (productSold / productTotal) * 100;
  return (
    <Bar progress={progress}>
      {progress >= 90 ? (
        <p>SẮP HẾT HÀNG</p>
      ) : (
        <p>
          ĐÃ BÁN
          {" "}
          {productSold}
        </p>
      )}
      <div className="sold" />
    </Bar>
  );
};
const Bar = styled.div<{ progress: number }>`
  position: relative;
  height: 20px;
  width: 80%;
  font-size: 13px;
  background: #ff5b3a5e;
  color: #ffffffcc;
  border-radius: 25px;
  overflow: hidden;
  font-weight: bold;
  & .sold {
    padding: 5px 0;
    height: 100%;
    width: ${(props) => `${props.progress}%`};
    background: #ee4d2d;
  }
  & p {
    position: absolute;
    text-align: center;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
`;
