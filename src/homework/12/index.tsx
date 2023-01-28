import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import styled from 'styled-components';

const boxVar = {
  hover: {
    scale: 0.9,
  },
};
const Homework = () => {
  const [clicked, setClicked] = useState(false);
  const [modal, setModal] = useState(false);
  const [id, setId] = useState('');

  return (
    <Wrapper>
      <BoxContainer>
        <Box
          variants={boxVar}
          whileHover="hover"
          layoutId="1"
          onClick={() => {
            setModal(true);
            setId('1');
          }}
        />
        <Box>{clicked ? <Circle layoutId="circle" /> : null}</Box>
        <Box>{!clicked ? <Circle layoutId="circle" /> : null}</Box>
        <Box
          variants={boxVar}
          whileHover="hover"
          layoutId="2"
          onClick={() => {
            setModal(true);
            setId('2');
          }}
        />
      </BoxContainer>
      <Button onClick={() => setClicked(!clicked)}>Switch</Button>
      <AnimatePresence>
        {modal ? (
          <ModalOverlay
            initial={{ backgroundColor: 'rgba(0,0,0,0)' }}
            animate={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            exit={{ backgroundColor: 'rgba(0,0,0,0)' }}
            onClick={() => setModal(false)}
          >
            <ModalBox layoutId={id} onClick={() => setModal(true)}></ModalBox>
          </ModalOverlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
};
export default Homework;

const Wrapper = styled(motion.div)`
  background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

const BoxContainer = styled(motion.div)`
  height: auto;
  width: auto;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 315px 315px;
`;
const Box = styled(motion.div)`
  width: 300px;
  height: 200px;
  background-color: rgba(255, 255, 255);
  border-radius: 15px;
  display: flex;
  margin: 5px;
  justify-content: center;
  align-items: center;
`;
const ModalOverlay = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
const ModalBox = styled(Box)`
  border: 1px solid red;
  background-color: rgba(255, 255, 255);
  position: relative;
  z-index: 100;
`;
const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  display: flex;
  border-radius: 100%;
  background-color: orange;
`;
const Button = styled(motion.button)`
  border: none;
  background-color: white;

  width: 100px;
  height: 50px;
  border-radius: 10px;
  margin: 10px;
  align-self: center;
  font-weight: 700;
`;
