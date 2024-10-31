/* eslint-disable react/react-in-jsx-scope */
import { ReactNode } from 'react';
import styled from 'styled-components';
import { COLOR } from 'style/theme';

const ModalOverlay = styled.div`
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: ${COLOR.main_yellow};
  padding: 20px;
  border-radius: 10px;
  width: 600px;
  max-width: 800px;
  height: 520px;
  font-family: 'Jua';
`;

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <ModalOverlay>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
