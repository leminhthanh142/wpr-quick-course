import React from "react";
import styled from "styled-components/macro";
import { TopTag } from "../../atoms/TopSearchTag";

interface CardProps {
  title: string;
  imgLink: string;
  revenue: number;
}
export const TopCard = ({ imgLink, title, revenue }: CardProps) => (
  <Card img={imgLink}>
    <TopTag />
    <div className="img-wrapper">
      <div className="topsearch-overlay">
        Bán
        {" "}
        {revenue}
        k+ /tháng
      </div>
      <div className="product" />
    </div>
    <p>{title}</p>
  </Card>
);
const Card = styled.div<{ img: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  & p {
    margin-top: 10px;
    font-size: 1.125rem;
    color: #555;
  }
  & .img-wrapper {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 5px auto;
    .topsearch-overlay {
      position: absolute;
      color: white;
      bottom: 0;
      z-index: 2;
      width: 100%;
      padding: 5px;
      background: #00000048;
    }
    .product {
      background-image: ${(props) => `url(${props.img})`};
      background-size: contain;
      background-repeat: no-repeat;
      width: 100%;
      padding-top: 100%;
      background-position: 50%;
    }
  }
`;
