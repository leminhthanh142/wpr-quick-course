import React from "react";
import styled from "styled-components/macro";

type ModalProps = {
  title: string;
  children?: React.ReactNode;
};

export const Modal = ({ title, children }: ModalProps) => (
  <Wrapper>
    <ModalHeader>{title}</ModalHeader>
    <ModalBody>{children}</ModalBody>
    <ModalFooter />
  </Wrapper>
);

const Wrapper = styled.div``;

const ModalHeader = styled.div``;

const ModalBody = styled.div``;

const ModalFooter = styled.div``;
