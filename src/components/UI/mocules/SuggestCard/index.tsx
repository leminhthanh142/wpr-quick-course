import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import DiscountTag from "../../atoms/DiscountTag";

interface CardProps {
  title: string;
  imgLink: string;
  price: number;
  productSold?: number;
  discountPercent?: number;
  linkTo: string;
}

const SuggestCard = ({
  title,
  imgLink,
  price,
  productSold,
  discountPercent,
  linkTo,
}: CardProps) => {
  const formatPrice = (productPrice: number) => productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const formatSold = (sold: number) => (sold / 1000 >= 1 ? Math.round(sold / 1000) : sold);

  return (
    <Container productImg={imgLink} className="card-wrapper">
      <StyledLink to={linkTo}>
        <div className="card">
          {discountPercent && (
            <DiscountTag discount={discountPercent} />
          )}
          <div className="img-wrapper">
            <div className="product" />
          </div>
          <div className="title">{title}</div>
          <div className="info">
            <p className="price-text">
              <span className="unit">₫</span>
              {formatPrice(price)}
            </p>
            {productSold && (
            <p className="sold">
              Đã bán
              {formatSold(productSold)}
              k
            </p>
            )}
          </div>
          <span className="hover-item">
            <div>Tìm sản phẩm tương tự</div>
          </span>
        </div>
      </StyledLink>
    </Container>
  );
};

export default SuggestCard;
const StyledLink = styled(Link)`
  color: #555;
`;
const Container = styled.div<{ productImg: string; discountImg?: string }>`
  width: 100%;
  cursor: pointer;
  font-size: 0.85em;
  & .card {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    background: white;
    .img-wrapper {
      position: relative;
      width: 100%;
      .discount-overlay {
        position: absolute;
        z-index: 10;
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
    .title {
      width: 100%;
      height: 40px;
      padding-left: 10px;
      margin: 10px 0;
      text-overflow: ellipsis;
      overflow: hidden;
      overflow-wrap: break-word;
      white-space: nowrap;
    }
    .info {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin: 8px 0;
      padding: 0 15px;
      .price-text {
        color: #ee4d2d;
      }
      .sold {
        font-size: 0.75em;
        color: #555555c3;
      }
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
