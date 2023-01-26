import { motion, useScroll, useTransform, useViewportScroll } from "framer-motion";
import React, {useEffect} from "react";
import styled from "styled-components";

const Box1 = () => {
  //scrollYProgress 페이지 상에서 내가 Y축의 몇 퍼센트에 있는지 확인할 수 있음
  const {scrollYProgress} = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2])
  const borderRadius = useTransform(scrollYProgress, [0, 1], ['0px', '100px'])
  const backgroundColor = useTransform(scrollYProgress, [0, 1], ['rgba(96, 34, 211, 0.8)', 'rgba(131, 110, 170, 0.8)'])
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 360])
  // useEffect(() => {
  //   scrollY.onChange(() => console.log(scrollY.get(), scrollYProgress.get()))
  // }, [scrollY, scrollYProgress])
  return <Box style={{scale, borderRadius, backgroundColor, rotateZ}} />;
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
