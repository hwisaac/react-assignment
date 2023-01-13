import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import styled from 'styled-components';

const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
`;
const Modal = styled.div`
  height: 70vh;
  width: 30vw;
  border-radius: 10px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Homework = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {modalOpen ? (
        <>
          <Overlay onClick={() => setModalOpen(false)} />
          <Modal>
            <button onClick={() => setModalOpen(false)}>X</button>
          </Modal>
        </>
      ) : null}
      <button onClick={() => setModalOpen(true)}>모달창 띄우기</button>
    </>
  );
};

export default Homework;
