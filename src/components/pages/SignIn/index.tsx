import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { Logo } from "../../sources/Logo";
import { Modal } from "../../UI/mocules/modal";

export const SignInPage = () => (
  <Wrapper>
    <Link to="/">
      <Logo color="#ee4d2d" />
    </Link>
    <Modal title="Đăng nhập" />
    Đăng nhập
  </Wrapper>
);

const Wrapper = styled.div``;
