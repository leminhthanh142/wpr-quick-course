import React from "react";
import styled from "styled-components/macro";
import DiscountTag from "../../../atoms/DiscountTag";
import { ProgressBar } from "../../../atoms/ProgressBar";

interface CardProps {
  imgLink: string;
  discountImg: string;
  price: number;
  productSold: number;
  productTotal: number;
  discount: number;
}

const FlashSaleCard = ({
  imgLink,
  discountImg,
  price,
  productSold,
  productTotal,
  discount,
}: CardProps) => {
  const formatPrice = (x: number) => {
    const result = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return result;
  };
  const formattedPrice = formatPrice(price);
  return (
    <Container productImg={imgLink} discountImg={discountImg}>
      <div className="img-wrapper">
        <div className="discount-overlay" />
        <div className="product" />
      </div>
      <p className="price-text">
        <span className="unit">₫</span>
        {formattedPrice}
      </p>
      <ProgressBar productSold={productSold} productTotal={productTotal} />
      <DiscountTag discount={discount} />
    </Container>
  );
};
export default FlashSaleCard;
const Container = styled.div<{ productImg: string; discountImg: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;

  & .img-wrapper {
    position: relative;
    width: 173px;
    height: 173px;
    margin: 5px auto;

    .discount-overlay {
      position: absolute;
      z-index: 1;
      left: 50%;
      width: 173px;
      height: 173px;
      transform: translateX(-50%);
      background-image: ${(props) => `url(${props.discountImg})`};
      background-size: contain;
      background-repeat: no-repeat;
    }

    .product {
      background-image: ${(props) => `url(${props.productImg})`};
      background-size: contain;
      background-repeat: no-repeat;
      width: 100%;
      padding-top: 100%;
      background-position: 50%;
    }
  }

  & .price-text {
    color: #ee4d2d;
    font-size: 1.5rem;
    .unit {
      margin-right: 4px;
      font-size: 15px;
    }
  }
`;
