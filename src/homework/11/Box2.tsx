import { motion, useMotionValue, useTransform } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const Box2 = () => {
  const y = useMotionValue(0);
  const rotate = useTransform(y, [-400, 400], [-360, 360]);
  const background = useTransform(
    y,
    [-400, 0, 400],
    [
      'linear-gradient(135deg, rgb(71, 75, 189), rgb(96, 54, 147))',
      'linear-gradient(135deg, rgb(51, 101, 100), rgb(24, 243, 130))',
      'linear-gradient(135deg, rgb(220, 169, 88), rgb(202, 213, 42))',
    ]
  );
  // motionValue값이 변해도 리렌더링하지 않음
  // useEffect(() => {
  //   y.onChange(() => console.log(y.get()));
  // });
  return <Box style={{ y, rotate, background }} drag="y" dragSnapToOrigin />;
};

export default Box2;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  background-color: linear-gradient(
    135deg,
    rgb(75, 140, 139),
    rgb(15, 129, 205)
  );
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 50vh;
  left: 50vw;
`;
