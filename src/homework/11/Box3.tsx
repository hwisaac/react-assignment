import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useEffect } from 'react';
import { RecoilBridge } from 'recoil';
import styled from 'styled-components';

const Box1 = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ['rgb(0,0,0)', 'rgb(255, 255, 255)']
  );
  const borderRadius = useTransform(scrollYProgress, [0, 1], ['0', '100%']);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 900]);
  // useEffect(() => {
  //   scrollYProgress.onChange(() => console.log(scrollYProgress.get()));
  // });
  return <Box style={{ scale, background, borderRadius, rotate }} />;
};

export default Box1;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 50vh;
  left: 70vw;
  border: 1px solid black;
`;
