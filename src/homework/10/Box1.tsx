import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Box1 = () => {
  return (
    <Box
      transition={{ type: 'spring' }}
      initial={{ scale: 0 }}
      animate={{ scale: 1, rotate: 180 }}
    />
  );
};

export default Box1;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
`;
