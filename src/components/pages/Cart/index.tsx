/* eslint-disable no-return-assign */
import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import axios from "axios";
import { CartItem } from "../../UI/mocules/CartItem";
import { CartItemTypes } from "../../../types/product";
import { SuggestionSlider } from "../../UI/organisms/DetailPageComponents/SuggestionSlider";
import { centerItem } from "../../../shared/centerItemStyle";
import { styledCheckbox } from "../../../shared/checkBoxStyle";
import { Footer } from "../../templates/Footer";

export const CartView = () => {
  const [inCartProducts, setInCartProducts] = useState<CartItemTypes[]>([]);
  const [selectedItems, setSelectedItems] = useState<CartItemTypes[]>([]);
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const getCartData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products?limit=5");
    // To add field isChecked to every data
    const editedResponse = (response.data).map((item: Object) => ({ ...item, isChecked: false }));
    setInCartProducts(editedResponse);
  };

  const handleDelete = (currentID:string) => {
    const updatedProducts = inCartProducts.filter((item) => item.id !== currentID);
    setInCartProducts(updatedProducts);
  };

  const handleBoxCheck = (e:React.MouseEvent) => {
    const itemID = e.currentTarget.id;
    const itemChecked = (e.currentTarget as HTMLInputElement).checked;

    if (itemID === "checkAll") {
      setIsAllChecked(!isAllChecked);
      setInCartProducts((prev:any) => {
        const result = prev.map((item:CartItemTypes) => ({ ...item, isChecked: itemChecked }));
        return result;
      });
    } else {
      const result = [...inCartProducts];
      result.forEach((item: CartItemTypes) => {
        const thisID = item.id.toString();
        // eslint-disable-next-line no-param-reassign
        if (thisID === itemID) item.isChecked = itemChecked;
      });
      setInCartProducts(result);
    }
  };

  // Fetch in cart products from api
  useEffect(() => {
    getCartData();
  }, []);

  // Check whether the all checkboxes are selected
  useEffect(() => {
    // eslint-disable-next-line no-restricted-syntax
    for (const item of inCartProducts) {
      if (!item.isChecked) {
        setIsAllChecked(false);
        break;
      }
      setIsAllChecked(true);
    }
  }, [inCartProducts]);

  // Check the number selected items
  useEffect(() => {
    const checkedItems = inCartProducts.filter((item:CartItemTypes) => item.isChecked === true);
    setSelectedItems(checkedItems);
  }, [inCartProducts]);

  // Calculate the total price of all products
  useEffect(
    () => {
      const total = selectedItems.reduce((prev, cur) => prev + cur.price, 0);
      setTotalPrice(total);
    },
    [selectedItems],
  );

  return (
    <Container>
      <ProductWrapper>

        <TitleBar>
          <div className="left-handside">
            <label htmlFor="checkAll" className="container">
              <input
                type="checkbox"
                id="checkAll"
                checked={isAllChecked}
                onClick={(e: React.MouseEvent) => handleBoxCheck(e)}
              />
              <span className="checkmark" />
            </label>
            <span>Sản Phẩm</span>
          </div>
          <div className="right-handside">
            <div>Đơn giá</div>
            <div>Số Lượng</div>
            <div>Số Tiền</div>
            <div>Thao Tác</div>
          </div>
        </TitleBar>

        <div className="item-list">
          {inCartProducts
          && inCartProducts.map((product) => (
            <CartItem
              isChecked={product.isChecked}
              key={product.id}
              id={product.id}
              image={product.image}
              price={product.price}
              title={product.title}
              onDelete={() => handleDelete(product.id)}
              onCheck={handleBoxCheck}
            />
          ))}
        </div>

        <Payment>
          <div className="left-handside">
            <label htmlFor="checkAll" className="container">
              <input
                type="checkbox"
                id="checkAll"
                checked={isAllChecked}
                onClick={(e: React.MouseEvent) => handleBoxCheck(e)}
              />
              <span className="checkmark" />
            </label>
            <span>
              Chọn Tất Cả
              {" ("}
              {inCartProducts.length}
              )
            </span>
          </div>
          <div className="right-handside">
            <span className="total-text">
              Tổng tiền hàng (
              {selectedItems.length}
              {" "}
              sản phẩm):
            </span>
            <span className="total">
              $
              {totalPrice}
            </span>
            <span className="button">Mua Hàng</span>
          </div>
        </Payment>

        <div className="suggestion">
          <p>CÓ THỂ BẠN CŨNG THÍCH</p>
          <SuggestionSlider suggestData="https://fakestoreapi.com/products" />
        </div>

      </ProductWrapper>
      <Footer />
    </Container>
  );
};
const Container = styled.div`
  ${centerItem()}
  flex-direction: column;
`;
const ProductWrapper = styled.div`
  width:70%;
  & .suggestion{
    p{
      margin-bottom:12px;
      font-size:1.2em;
      color:#444;
    }
  }
`;
const TitleBar = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:15px 50px;
  margin: 30px 0;
  position:relative;
  height: 60px;
  background:white;

  & .left-handside{
    display:flex;
    align-items: center;
    ${styledCheckbox()}
    width:50%;
    span{
      padding-left: 20px;
    }
  }

  & .right-handside{
    display: flex;
    align-items:center;
    width:50%;
    div{
      ${centerItem()}
      width:33.33%
    }
  }
`;
const Payment = styled.div`
  position:sticky;
  display:flex;
  flex-wrap:wrap;
  justify-content: space-between;
  align-items: center;
  background:white;
  bottom:0;
  padding:15px 50px;
  margin: 30px 0;
  height: 100px;
  border: 3px solid #ff4512;

  & .left-handside{
    display:flex;
    align-items: center;
    width:50%;
    ${styledCheckbox()}
    span{
      padding-left: 20px;
    }
  }

  & .right-handside{
    display:flex;
    align-items: center;
    .total{
      color:#ff4512;
      font-size:1.8em;
      margin:0 10px;
    }
    .button{
      cursor:pointer;
      display: block;
      text-align:center;
      background:#ff4512;
      color:white;
      padding:10px 0;
      width:100px;
    }
  }
`;
