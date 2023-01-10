import React from "react";
import { useState } from 'react';
import Modal from './components/Modal';

const Homework = () => {
  const [openModal, setOpenModal] = useState(false)
  const handleClick = () => {setOpenModal(true)}
  
  return (
  <>
    <button onClick={handleClick}>모달창 열기</button>
    {openModal && <Modal setOpenModal={setOpenModal} />}
  </>
);
};

export default Homework;
