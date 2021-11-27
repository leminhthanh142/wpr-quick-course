import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { Logo } from "../../sources/Logo";
import { Footer } from "../../templates/Footer";

export const SupportPage = () => (
  <Wrapper>
    <Header>
      <Link to="/">
        <Logo color="#ee4d2d" />
      </Link>
      <p>Hỗ trợ</p>
    </Header>
    <Body>
      <h1>Xin chào, Shopee có thể giúp gì cho bạn?</h1>
      <input placeholder="Đặt câu hỏi hoặc nhập từ khoá" />
    </Body>
    <Footer />
  </Wrapper>
);

const Wrapper = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  font-size: 24px;

  & p {
    color: #ee4d2d;
    margin-top: 10px;
  }
`;

const Body = styled.div`
  background: rgb(255, 80, 36) url("../ShopeeSG_Banner.png") center center /
    cover;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & h1 {
    color: #fff;
    font-size: 48px;
    margin-bottom: 20px;
  }

  & input {
    outline: none;
    border: none;
    padding: 30px;
    width: 60%;
    border-radius: 3px;
    font-size: 20px;
  }
`;
