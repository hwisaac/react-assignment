// import React, {Dispatch, SetStateAction } from 'react'

// interface ModalProps {
//   setOpenModal: Dispatch<SetStateAction<boolean>>;
//   openModal: boolean;
// }

const Modal = ({setOpenModal}) => {
  
  const handleClick = () => {setOpenModal(false)}

  return (
    <div style={{backgroundColor: 'yellow', width: 200, height: 200, margin: '200px auto'}}>
      모달창
      <button onClick={handleClick}>닫기</button>
    </div>
  )
}

export default Modal
