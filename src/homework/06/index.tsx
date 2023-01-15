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

const Button = styled.div`
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
`;

const Homework = () => {
  const box = {
    entry: (isBack: boolean) => ({
      x: isBack ? -500 : 500,
      opacity: 0,
      scale: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
    exit: (isBack: boolean) => ({
      x: isBack ? 500 : -500,
      opacity: 0,
      scale: 0,
      transition: {
        duration: 1,
      },
    }),
  };

  const [visible, setVisible] = useState(1);
  const [isBack, setIsBack] = useState(false);

  const nextClick = () => {
    setVisible((prev) => (prev === 10 ? 1 : prev + 1));
    setIsBack(false);
  };
  const prevClick = () => {
    setVisible((prev) => (prev === 1 ? 10 : prev - 1));
    setIsBack(true);
  };

  return (
    <Wrapper>
      <AnimatePresence custom={isBack}>
        <Box
          custom={isBack}
          variants={box}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <Button onClick={prevClick}>PREV</Button>
      <Button onClick={nextClick}>NEXT</Button>
    </Wrapper>
  );
};

export default Homework;
