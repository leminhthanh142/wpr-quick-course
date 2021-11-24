import React from "react";
import styled, { keyframes } from "styled-components/macro";
import { Link } from "react-router-dom";
import { Logo } from "../../../sources/Logo";
import { IconSearch } from "../../../sources/IconSearch";
import { IconCart } from "../../../sources/IconCart";
import { mediaQueryTabletPortrait, mediaQueryMobile } from "../../../../shared/media";

export const Search = () => (
  <HeaderSearch>
    <Link to="/">
      <Logo color="#fff" />
    </Link>
    <SearchBar>
      <Input placeholder="Nhập để tìm kiếm sản phẩm" />
      <IconSearch color="#fb5533" />
    </SearchBar>
    <CartContainer>
      <IconCart />
      <Items>
        <img
          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9bdd8040b334d31946f49e36beaf32db.png"
          alt=""
        />
        <p>Chưa Có Sản Phẩm</p>
      </Items>
    </CartContainer>
  </HeaderSearch>
);

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const HeaderSearch = styled.div`
  display: flex;
  align-items: center;
  height: 94px;
  position: relative;
  
  ${mediaQueryMobile(`
    justify-content: space-around;
  `)}
`;

const SearchBar = styled.div`
  width: 100%;
  height: 40px;
  background-color: #fff;
  border-radius: 2px;
  position: relative;
  display: flex;
  justify-content: space-around;

  ${mediaQueryTabletPortrait(`
    margin-left: 20px;
  `)}

  ${mediaQueryMobile(`
    width: 0%;
  `)}
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 8px;

  ${mediaQueryMobile(`
    display: none;
  `)}
`;

const Items = styled.div`
  display: none;
  width: 400px;
  position: absolute;
  border-radius: 2px;
  background-color: #fff;
  padding: 60px 0;
  top: 118%;
  right: 40%;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 999;
  animation: ${fadeIn} linear 0.2s;

  img {
    width: 25%;
  }
`;

const CartContainer = styled.div`
  position: relative;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 16px;

  &::before {
    content: "";
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -8px;
    height: 18px;
    cursor: pointer;
  }

  &:hover ${Items} {
    display: block;
  }
`;
