import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import styled from 'styled-components';

const BoxVar = {
  hover: {
    rotateZ: 90,
  },
  click: {
    borderRadius: '100%',
  },
};

const Box1 = () => {
  const constraintsRef = useRef(null);
  return (
    <BiggerBox ref={constraintsRef}>
      <Box
        variants={BoxVar}
        whileHover="hover"
        whileTap="click"
        drag
        dragConstraints={constraintsRef}
        dragSnapToOrigin={true}
        dragElastic={0.1}
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
