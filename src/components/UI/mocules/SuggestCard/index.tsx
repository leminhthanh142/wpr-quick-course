import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import DiscountTag from "../../atoms/DiscountTag";

interface CardProps {
  title: string;
  imgLink: string;
  discountImg?: string;
  price: number;
  productSold?: number;
  discountPercent?: number;
  linkTo: string
}

const SuggestCard = ({
  title,
  imgLink,
  discountImg,
  price,
  productSold,
  discountPercent,
  linkTo,
}: CardProps) => {
  const formatPrice = (x: number) => {
    const result = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return result;
  };

  const formattedPrice = formatPrice(price);
  return (
    <Container productImg={imgLink} discountImg={discountImg}>
      <Link to={linkTo}>
        <div className="card">
          <div className="img-wrapper">
            {discountImg && <div className="discount-overlay" />}
            <div className="product" />
          </div>
          <div className="title">{title}</div>
          <div className="info">
            <p className="price-text">
              <span className="unit">₫</span>
              {formattedPrice}
            </p>
            {productSold && (
            <p className="sold">
              Đã bán
              {productSold}
              k
            </p>
            )}
          </div>
          {discountPercent && <DiscountTag discount={discountPercent} />}
          <span className="hover-item">
            <div>Tìm sản phẩm tương tự</div>
          </span>
        </div>
      </Link>
    </Container>
  );
};

export default SuggestCard;

const Container = styled.div<{ productImg: string; discountImg?: string }>`
  width: 16.66667%;
  padding: 0.3125rem;
  cursor: pointer;
  & .card {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    position: relative;
    background: white;
  }
  & .img-wrapper {
    position: relative;
    width: 100%;
    .discount-overlay {
      position: absolute;
      z-index: 2;
      left: 50%;
      width: 100%;
      height: 100%;
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
    }
  }
  & .title {
    width: 168px;
    height: 32px;
    padding-left: 10px;
    margin: 10px 0;
    text-overflow: ellipsis;
    overflow: hidden;
    word-wrap: break-word;
    white-space: nowrap;
    font-size: 0.85em;
  }

  & .info {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 8px 0;
    .price-text {
      color: #ee4d2d;
    }
    .sold {
      font-size: 0.75em;
      color: #555555c3;
    }
  }

  & .hover-item {
    opacity: 0;
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    text-align: center;
    padding: 10px;
    background: #ee4d2d;
    color: white;
    width: 100%;
    z-index: 2;
    transition: opacity 0.1s linear;
  }
  &:hover {
    .card {
      border: 1px solid #ee4d2d;
    }
    .hover-item {
      opacity: 1;
    }
  }
`;
