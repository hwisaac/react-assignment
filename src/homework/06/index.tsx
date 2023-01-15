import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Wrapper = styled(motion.div)`
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  top: 330px;
  gap: 10px;
`;

const Button = styled.div`
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
`;

const box = {
  entry: (back: boolean) => ({
    x : back? -500 : 500,
    opacity: 0,
    scale: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  },
  exit: (back:boolean) => ({
    x: back? 500: -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5
    }
  })
}

const Homework = () => {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false)
  const handlePrev = () => {
    setBack(true)
    setVisible(prev => prev === 1 ? 1 : prev - 1)
  }
  const handleNext = () => {
    setBack(false)
    setVisible((prev) => prev === 5 ? 5 : prev + 1)
  }
  
  return (
    <Wrapper>
      <AnimatePresence custom={back}>
          <Box
            custom={back}
            key={visible} 
            variants={box} 
            initial='entry'
            animate='center'
            exit='exit'>
              {visible}
          </Box>
      </AnimatePresence>
      <ButtonContainer>
        <Button onClick={handlePrev}>PREV</Button>
        <Button onClick={handleNext}>NEXT</Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Homework;
