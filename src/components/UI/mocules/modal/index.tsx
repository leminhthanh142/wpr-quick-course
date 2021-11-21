import React from "react";
import styled from "styled-components/macro";

type ModalProps = {
  title?: string;
  children?: React.ReactNode;
};

export const Modal = ({ title, children }: ModalProps) => (
  <Wrapper>
    <ModalHeader>{title}</ModalHeader>
    <ModalBody>{children}</ModalBody>
    <ModalFooter />
  </Wrapper>
);

const Wrapper = styled.div`
  background-color: #fff;
  width: 400px;
  height: 450px;
  border-radius: 3px;
  overflow: hidden;
  padding: 24px 30px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
`;

const ModalHeader = styled.div`
  font-size: 24px;
  margin-bottom: 24px;
`;

const ModalBody = styled.div``;

const ModalFooter = styled.div``;
