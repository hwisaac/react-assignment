import { motion } from "framer-motion";
import React, { useRef } from "react";
import styled from "styled-components";

const variants = {
  start: {},
  end: {},
  hover: {
    rotateZ: 360
  },
  click: {
    borderRadius: '100px'
  }
}

const Box1 = () => {
  const biggerBoxRef = useRef<HTMLDivElement>(null)
  return (
    <BiggerBox ref={biggerBoxRef}>
      <Box drag dragConstraints={biggerBoxRef} dragSnapToOrigin variants={variants} whileHover='hover' whileTap='click'  />
    </BiggerBox>
  );
};

export default Box1;

const BiggerBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: fixed;
  top: 30vh;
  left: 30vw;
`;
const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
`;
