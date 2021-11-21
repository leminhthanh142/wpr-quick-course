import React from "react";
import styled from "styled-components";

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

const ModalWrapper = styled.div``;

const ModalHeader = styled.div``;

const ModalBody = styled.div``;

const ModalFooter = styled.div``;
