import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { Logo } from "../../sources/Logo";
import { Modal } from "../../UI/mocules/modal";
import { Footer } from "../../templates/Footer";

export const SignInPage = () => (
  <Wrapper>
    <Header>
      <Link to="/">
        <Logo color="#ee4d2d" />
      </Link>
      <p>Đăng nhập</p>
    </Header>
    <Body>
      <Modal title="Đăng nhập">
        <div className="input">
          <input placeholder="Email/Số điện thoại/Tên đăng nhập" />
        </div>
        <div className="input">
          <input type="password" placeholder="Mật khẩu" />
        </div>
        <div>
          <button type="submit">ĐĂNG NHẬP</button>
          <SignInFeature>
            <Link to="/">Quên mật khẩu</Link>
            <Link to="/">Đăng nhập với SMS</Link>
          </SignInFeature>
        </div>
        <Seperate>
          <Line />
          <span>HOẶC</span>
          <Line />
        </Seperate>
        <div style={{ marginBottom: "30px", textAlign: "center" }}>
          <span>Facebook</span>
          <span>Google</span>
          <span>Apple</span>
        </div>
        <Text>
          Bạn mới biết đến Shopee?
          <Link to="/signup">Đăng ký</Link>
        </Text>
      </Modal>
    </Body>
    <Footer />
  </Wrapper>
);

const Wrapper = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 16px;
  background-color: #fff;
  font-size: 24px;
`;

const Body = styled.div`
  background-color: #ee4d2d;
  height: 600px;
  position: relative;

  & .input {
    border: 1px solid #ddd;
    margin-bottom: 24px;
  }

  & input,
  & button {
    border-radius: 3px;
    padding: 12px;
    width: 100%;
    border: none;
  }

  & button {
    background-color: #ee4d2d;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
  }
`;

const SignInFeature = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;

  & a {
    color: blue;
  }
`;

const Seperate = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;

  & span {
    color: #ccc;
    padding: 0 1rem;
    text-transform: uppercase;
    font-size: 0.75rem;
  }
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #dbdbdb;
  flex: 1;
`;

const Text = styled.div`
  text-align: center;
  margin-bottom: 30px;
  color: #bbb;
  font-size: 16px;

  & a {
    display: inline-block;
    color: #ee4d2d;
  }
`;
