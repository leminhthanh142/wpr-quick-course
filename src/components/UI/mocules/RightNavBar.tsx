import React, { useState } from "react";
import styled, { keyframes } from "styled-components/macro";
import { Modal } from "./modal";

// viết kiểu này thì đoạn nó click đki đăng nhập kiểu gì?
export const RightNavbar = () => {
  const [show, setShow] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");

  const handleCloseModal = () => {
    setShow(false);
  };

  return (
    <>
      <RightNavbarItems>
        <RightNavbarItems className="notification">
          <ItemLink href="">Thông báo</ItemLink>
          <NotificationContainer className="notification-container">
            <NotificationHeader>
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/99e561e3944805a023e87a81d4869600.png"
                alt=""
              />
              <p>Đăng nhập để xem Thông báo</p>
            </NotificationHeader>

            <ButtonContainer>
              <Button
                onClick={() => {
                  setShow(true);
                  setTitle("Sign Up Form");
                }}
              >
                Đăng ký
              </Button>

              <Button
                onClick={() => {
                  setShow(true);
                  setTitle("Login Form");
                }}
              >
                Đăng nhập
              </Button>
            </ButtonContainer>
          </NotificationContainer>
        </RightNavbarItems>

        <RightNavbarItems>
          <ItemLink href="https://help.shopee.vn/vn/s/">Hỗ trợ</ItemLink>
        </RightNavbarItems>
        <RightNavbarItems>
          <ItemLink
            href=""
            onClick={(e) => {
              setShow(true);
              setTitle("Sign In Form");
              e.preventDefault();
            }}
          >
            Đăng ký
          </ItemLink>
        </RightNavbarItems>
        <RightNavbarItems>
          <ItemLink
            href=""
            onClick={(e) => {
              setShow(true);
              setTitle("Sign Up Form");
              e.preventDefault();
            }}
          >
            Đăng nhập
          </ItemLink>
        </RightNavbarItems>
      </RightNavbarItems>

      <Modal show={show} title={title} onClose={handleCloseModal}>
        <input type="text" placeholder="Số điện thoại" />
        <input type="password" placeholder="Mật khẩu" />
        <input type="password" placeholder="Nhập lại mật khẩu" />
      </Modal>
    </>
  );
};

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const NotificationContainer = styled.div`
  position: absolute;
  background: #fff;
  width: 400px;
  height: 360px;
  top: 118%;
  right: 0;
  z-index: 999;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  display: none;
  animation: ${fadeIn} ease-in 0.3s;

  &::before {
    content: "";
    width: 100%;
    position: absolute;
    left: 0;
    top: -10px;
    height: 18px;
    cursor: pointer;
  }
`;

const NotificationHeader = styled.div`
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 30%;
  }
`;

const ButtonContainer = styled.div`
  height: 40px;
  display: flex;
`;

const Button = styled.button`
  border: none;
  flex: 1;
  font-size: 14px;
  color: #333;
  background-color: #f5f5f5;

  &:hover {
    background-color: #eee;
    color: #ee4d2d;
    cursor: pointer;
  }
`;

const RightNavbarItems = styled.li`
  position: relative;
  display: inline-block;
  margin: 0 8px;

  &.notification:hover .notification-container {
    display: block;
  }
`;

const ItemLink = styled.a`
  font-family: "Arial", sans-serif;
  font-size: 13px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;
