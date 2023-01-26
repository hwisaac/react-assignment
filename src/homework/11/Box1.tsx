import { motion } from "framer-motion";
import React, { useRef } from "react";
import styled from "styled-components";

const variant = {
  hover: {
    rotateZ: 90,
  },
  click: {
    borderRadius: "50%",
  },
};

const Box1 = () => {
  const biggerBoxRef = useRef<HTMLDivElement>(null);

  return (
    <BiggerBox ref={biggerBoxRef}>
      <Box
        drag
        dragSnapToOrigin // 원래 자리로 오게 하기
        dragConstraints={biggerBoxRef}
        dragElastic={0} // 기본 0.5, 당기는 힘
        variants={variant}
        whileHover="hover"
        whileTap="click"
      />
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
