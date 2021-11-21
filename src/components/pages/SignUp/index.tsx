import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { Logo } from "../../sources/Logo";
import { Modal } from "../../UI/mocules/modal";
import { Footer } from "../../templates/Footer";

export const SignUpPage = () => (
  <Wrapper>
    <Header>
      <Link to="/">
        <Logo color="#ee4d2d" />
      </Link>
      <p>Đăng ký</p>
    </Header>
    <Body>
      <Modal title="Đăng ký">
        <div className="input">
          <input placeholder="Số điện thoại" />
        </div>
        <button type="submit">TIẾP THEO</button>
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
          Bằng việc đăng kí, bạn đã đồng ý với Shopee về
          <Link to="/">Điều khoản dịch vụ</Link>
          &
          <Link to="/">Chính sách bảo mật</Link>
        </Text>
        <StyledText>
          Bạn đã có tài khoản?
          <Link to="/signin">Đăng nhập</Link>
        </StyledText>
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
  font-size: 12px;
  text-align: center;
  margin-bottom: 30px;
  
  & a {
    display: inline-block;
    color: #ee4d2d;
  }
  `;

const StyledText = styled(Text)`
color: #bbb;
  font-size: 16px;
`;
