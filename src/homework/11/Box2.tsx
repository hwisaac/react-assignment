import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Box2 = () => {
  return <Box />;
};

export default Box2;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 50vh;
  left: 50vw;
`;
