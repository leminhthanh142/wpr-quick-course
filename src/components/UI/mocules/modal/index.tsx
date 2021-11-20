import React from "react";
import styled from "styled-components/macro";

type ModalProps = {
  title: string;
  children?: React.ReactNode;
};

export const Modal = ({ title, children }: ModalProps) => (
  <Wrapper>
    <ModalWrapper>
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter />
    </ModalWrapper>
  </Wrapper>
);

const Wrapper = styled.div``;

const ModalWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  background-color: #fff;
  position: relative;
  padding: 0 36px;

  & span {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
  }

  & span:hover {
    background-color: #ddd;
    cursor: pointer;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;
const ModalBody = styled.div`
  margin-bottom: 24px;

  & input {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    margin: 2px 0;
    outline: none;
  }

  & input:focus {
    border: 1px solid #000;
  }
`;
const ModalFooter = styled.div``;
