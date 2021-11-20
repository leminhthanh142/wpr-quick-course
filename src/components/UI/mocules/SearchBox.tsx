import React from "react";
import styled, { keyframes } from "styled-components";
import { Logo } from "../../sources/Logo";
import { IconSearch } from "../../sources/IconSearch";
import { IconCart } from "../../sources/IconCart";

export const Search = () => (
  <HeaderSearch>
    <LogoWrapper>
      <a href="https://shopee.vn/">
        <Logo />
      </a>
    </LogoWrapper>
    <SearchBar>
      <Input placeholder="Nhập để tìm kiếm sản phẩm" />
      <IconSearchWrapper>
        <IconSearch />
      </IconSearchWrapper>
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
`;
const LogoWrapper = styled.div`
  width: 200px;
`;

const SearchBar = styled.div`
  flex: 1;
  height: 40px;
  background-color: #fff;
  border-radius: 2px;
  position: relative;
  display: flex;
  justify-content: space-around;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 8px;
`;

const IconSearchWrapper = styled.div`
  position: absolute;
  right: 4px;
  top: 3px;
  height: 34px;
  width: 60px;
  background-color: #fb5533;
  border-radius: 2px;
  text-align: center;
  line-height: 40px;

  &:hover {
    background-color: #fb6445;
    cursor: pointer;
  }
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
  animation: ${fadeIn} ease-in 0.3s;

  img {
    width: 25%;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
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
