import { motion, useMotionValue, useTransform } from "framer-motion";
import React, {useEffect} from "react";
import styled from "styled-components";

const Box2 = () => {
  const y = useMotionValue(0)
  const rotateZ = useTransform(y, [-200, 200], [-360, 360])
  const gradient = useTransform(y, [-200, 0, 200], ['rgba(96, 34, 211, 0.8)', 'rgba(42, 207, 39, 0.8)', 'rgba(227, 23, 23, 0.8)'])
  useEffect(() => {
    // y.onChange(() => console.log(y.get()))
    // scale.onChange(() => console.log(scale.get()))
  }, [y])
  return <Box style={{y, rotateZ, background: gradient}} drag='y' dragSnapToOrigin />;
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
