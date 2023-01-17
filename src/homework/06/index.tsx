import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Wrapper = styled(motion.div)`
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Button = styled.div`
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
`;

const boxVar = {
  initial: (direction: 1 | -1) => ({
    opacity: 0,
    x: 500 * direction,
    scale: 0,
  }),
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: (direction: 1 | -1) => ({
    opacity: 0,
    x: -500 * direction,
    scale: 0,
  }),
};

const Homework = () => {
  const [visible, setVisible] = useState(1);
  const [direction, setDirection] = useState(1);

  const handler = (argument: string) => {
    if (argument === 'prev' && visible > 1) {
      setDirection(-1);
      setVisible((visible) => visible - 1);
    }
    if (argument === 'next' && visible < 6) {
      setDirection(1);
      setVisible((visible) => visible + 1);
    }
  };
  //   console.log(boxVar.exit(back), back);

  return (
    <Wrapper>
      <AnimatePresence custom={direction}>
        <Box
          key={visible}
          variants={boxVar}
          initial="initial"
          exit="exit"
          animate="animate"
          custom={direction}
          transition={{ duration: 1 }}
        >
          {visible}
        </Box>
      </AnimatePresence>

      <Button onClick={() => handler('next')}>NEXT</Button>
      <Button onClick={() => handler('prev')}>PREV</Button>
    </Wrapper>
  );
};

export default Homework;
