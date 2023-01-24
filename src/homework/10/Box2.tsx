import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const boxVariant = {
  start: {
    scale: 0,
  },
  end: {
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};
const circleVariant = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

const Box1 = () => {
  return (
    <Box variants={boxVariant} initial="start" animate="end">
      <Circle variants={circleVariant} />
      <Circle variants={circleVariant} />
      <Circle variants={circleVariant} />
      <Circle variants={circleVariant} />
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
