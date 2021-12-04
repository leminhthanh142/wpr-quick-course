import { type } from "os";
import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components/macro";
import { CartItemTypes } from "../../../../types/product";
import Counter from "../../atoms/Counter";
import { styledCheckbox } from "../../../../shared/checkBoxStyle";
import { centerItem } from "../../../../shared/centerItemStyle";

export const CartItem = ({
  id, image, price, title, onDelete, isChecked, onCheck,
}:CartItemTypes) => {
  const [size, setSize] = useState<string>();
  const [color, setColor] = useState<string>();
  const [amount, setAmount] = useState<number>(1);

  const handleDecrease = () => setAmount(amount - 1);
  const handleIncrease = () => setAmount(amount + 1);

  useLayoutEffect(() => {
    if (amount <= 0) setAmount(1);
  }, [amount]);

  return (
    <Container>
      <div className="product-detail">
        <label className="container" htmlFor={id}>
          <input id={id} type="checkbox" onClick={onCheck} checked={isChecked} />
          <span className="checkmark" />
        </label>
        <div className="image">
          <img src={image} alt="product" />
        </div>
        <div className="title">{title}</div>
        <div className="type">
          <div className="size">{size}</div>
          <div className="color">{color}</div>
        </div>
      </div>

      <div className="interaction">
        <div className="price">
          $
          {" "}
          {price}
        </div>
        <Counter onDecrease={handleDecrease} onIncrease={handleIncrease} count={amount} />
        <div className="total-price">
          $
          {" "}
          {(price * amount).toFixed(2)}
        </div>
        <div className="delete-btn" onClick={onDelete}>Xóa</div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  ${centerItem()}
  ${styledCheckbox()}
  position:relative;
  background:white;
  outline:2px solid #ddd;
  padding:15px 50px;

  & .product-detail{
    display:flex;
    align-items:center;
    width:50%;
    .title{
      white-space:nowrap;
      overflow: hidden;
      text-overflow:ellipsis;
      width:240px;
    }
    .image{
      width: 120px;
      height: 120px;
      margin: 0 20px;
      img{
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
  }

  & .interaction{
    ${centerItem()}
    text-align:center;
    width:50%;
    .total-price{
      color:#ff4613;
    }
    .delete-btn{
      cursor:pointer;
    }
    div{
      width:33.33%;
    }
  }
`;
