import React from "react";
import styled from "styled-components";

type ModalProps = {
  title: string
  show: boolean
  children?: React.ReactNode
  onClose: () => void
}

export const Modal = ({
  title, show, children, onClose,
}: ModalProps) => {
  if (!show) return null;
  return (
    <Wrapper>
      <ModalWrapper>
        <span onClick={onClose}>X</span>
        <ModalHeader>
          {title}
        </ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
        <ModalFooter />
      </ModalWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.2);
  width: 100vw;
  height: 100vh;
`;
const ModalWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;
const ModalHeader = styled.div``;
const ModalBody = styled.div``;
const ModalFooter = styled.div``;
