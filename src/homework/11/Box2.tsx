import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";

const Box2 = () => {
  const y = useMotionValue(0); // 요소의 움직임을 탐색, 위치 반환

  // 어떤 값이 변할 때마다 내가 원하는 값으로 변환
  const rotateZ = useTransform(y, [-460, 0, 360], [180, 0, -180]);
  const background = useTransform(
    y,
    [-460, 0, 360],
    [
      "linear-gradient(135deg, rgb(170, 43, 43), rgb(44, 66, 167)",
      "linear-gradient(135deg, rgb(0, 0, 0), rgb(255, 255, 255)",
      "linear-gradient(135deg, rgb(65, 194, 72), rgb(228, 247, 65)",
    ]
  );

  // useMotionValue 는 값이 변할 때마다 랜더링하지 않아 값을 보고 싶다면 useEffect 로 y 가 변할 때마다 업데이트
  // useEffect(() => {
  //   rotate.onChange(() => console.log(rotate.get()));
  // }, [y]);

  return <Box drag="y" style={{ y, rotateZ, background }} />;
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
