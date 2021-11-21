import React from "react";
import styled from "styled-components/macro";
import DiscountTag from "../../atoms/DiscountTag";

interface CardProps {
  imgLink: string;
  discountImg?: string;
  price: number;
  productSold?: number;
  discount?: number;
}

const SuggestCard = ({
  imgLink,
  discountImg,
  price,
  productSold,
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
      <div className="hover-item">Tìm sản phẩm tương tự</div>
      {discount ?? <DiscountTag discount={discount} />}
      {productSold ?? <p>Đã bán ...k</p>}
    </Container>
  );
};

export default SuggestCard;

const Container = styled.div<{ productImg: string; discountImg?: string }>`
  display: flex;
  position: relative;
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
      z-index: 2;
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

  & .hover-item {
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    text-align: center;
    padding: 10px;
    background: #ee4d2d;
  }
`;
