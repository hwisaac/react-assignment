import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import styled from "styled-components";

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
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  display: flex;
  margin: 5px;
  justify-content: center;
  align-items: center;
`;
const ModalOverray = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.2;
`;
const ModalBox = styled(Box)`
  position: absolute;
  border: 1px solid red;
  background-color: rgba(255, 255, 255, 1);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
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

const Homework = () => {
  return (
    <Wrapper>
      <BoxContainer>
        <Box />
        <Box />
        <Box>
          <Circle />
        </Box>
        <Box />
      </BoxContainer>
      <Button>Switch</Button>
    </Wrapper>
  );
};

export default Homework;
