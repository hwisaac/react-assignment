import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.3,
    }
  }
}

const circleVariants = {
  start: {
    opacity: 0
  },
  end: {
    opacity: 1,
  }
}

const Box1 = () => {
  return (
    <Box variants={boxVariants} initial='start' animate='end'>
      <Circle variants={circleVariants} />
      <Circle variants={circleVariants} /> 
      <Circle variants={circleVariants} />
      <Circle variants={circleVariants} />
    </Box>
  );
};

export default Box1;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 15px;
  background-image: linear-gradient(
    -20deg,
    #ddd6f3 0%,
    #faaca8 100%,
    #faaca8 100%
  );
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Circle = styled(motion.div)`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
  place-self: center;
`;
