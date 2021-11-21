import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { Logo } from "../../sources/Logo";
import { Modal } from "../../UI/mocules/modal";

export const SignUpPage = () => (
  <Wrapper>
    <Link to="/">
      <Logo color="#ee4d2d" />
    </Link>
    <Modal title="Đăng ký" />
    Đăng ký
  </Wrapper>
);

const Wrapper = styled.div``;
