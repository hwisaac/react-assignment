import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";

// 색상, 테두리, 크기

const Box1 = () => {
  const { scrollYProgress } = useScroll(); // 전체 문서에서 진행도, 0~1
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["#000000", "#cc72e7"]
  );
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // useEffect(() => {
  //   scrollYProgress.onChange(() => console.log(scrollYProgress.get()));
  // }, [scrollYProgress]);

  return <Box style={{ background, borderRadius, scale, rotateZ }} />;
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
