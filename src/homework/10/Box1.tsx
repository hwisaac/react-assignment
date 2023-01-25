import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Box1 = () => {
  const variants = {
    start: {scale: 0},
    end: {scale: 1, rotateZ: 360, transition: {type: 'spring'}}
  }
  return <Box 
           variants={variants}
           initial='start'
           animate='end'
        />;
};

export default Box1;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
`;
