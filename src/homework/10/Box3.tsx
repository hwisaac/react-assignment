import { motion } from "framer-motion";
import React from "react";
import { RecoilBridge } from "recoil";
import styled from "styled-components";

const variants = {
  hover: {
    scale: 1.5, rotateZ: 90
  },
  tap: {
    scale:1, borderRadius:'100px',
    backgroundColor: '#493299b1'
  }
}

const Box1 = () => {
  return <Box variants={variants} whileHover='hover' whileTap='tap' />;
};

export default Box1;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: #dfdbdb;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
`;
