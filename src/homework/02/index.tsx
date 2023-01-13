import React, { useState } from "react";
import Modal from "./Modal";

const Homework = () => {
  const [modal, setModal] = useState(false);
  const onClick = () => {
    setModal(true);
  };
  return (
    <>
      <button onClick={onClick}>모달창열기</button>
      {modal ? <Modal setModal={setModal} /> : null}
    </>
  );
};

export default Homework;
