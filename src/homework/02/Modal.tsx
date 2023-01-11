import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 30vw;
  height: 50vh;
  margin: 10% auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: steelblue;
`;

const Modal = ({ setModal }) => {
  const onClick = () => {
    setModal(false);
  };

  return (
    <Container>
      Modal
      <button onClick={onClick}>모달창닫기</button>
    </Container>
  );
};

export default Modal;
