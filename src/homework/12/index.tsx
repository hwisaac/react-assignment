import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import styled from "styled-components";

const boxVars = {
  hover: {
    scale: 0.9,
  },
};

const btnVars = {
  ani: (circleSwitch: boolean) => ({
    background: circleSwitch
      ? "linear-gradient(135deg, rgb(22, 182, 245), rgb(202, 43, 241)"
      : "linear-gradient(135deg, rgb(43, 170, 54), rgb(214, 238, 76)",
    color: circleSwitch ? "#66ff29" : "#5776fff8",
  }),
};

const Homework = () => {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState("");
  const [circleSwitch, setCircleSwitch] = useState(false);

  return (
    <Wrapper>
      <BoxContainer>
        <Box
          onClick={() => {
            setModal((prev) => !prev);
            setId("firstBox");
          }}
          layoutId="firstBox"
          variants={boxVars}
          whileHover="hover"
        />
        <Box>{circleSwitch ? <Circle layoutId="circle" /> : null}</Box>
        <Box>{circleSwitch ? null : <Circle layoutId="circle" />}</Box>
        <Box
          onClick={() => {
            setModal((prev) => !prev);
            setId("lastBox");
          }}
          layoutId="lastBox"
          variants={boxVars}
          whileHover="hover"
        />
      </BoxContainer>
      <Button
        custom={circleSwitch}
        variants={btnVars}
        animate="ani"
        onClick={() => setCircleSwitch((prev) => !prev)}
      >
        Switch
      </Button>

      <AnimatePresence>
        {modal ? (
          <ModalOverray onClick={() => setModal(false)}>
            <ModalBox layoutId={id} />
          </ModalOverray>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
};
export default Homework;

const Wrapper = styled(motion.div)`
  background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

const BoxContainer = styled(motion.div)`
  height: auto;
  width: auto;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 315px 315px;
`;
const Box = styled(motion.div)`
  width: 300px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  display: flex;
  margin: 5px;
  justify-content: center;
  align-items: center;
`;
const ModalOverray = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.2;
`;
const ModalBox = styled(Box)`
  position: absolute;
  border: 1px solid red;
  background-color: rgba(255, 255, 255, 1);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  display: flex;
  border-radius: 100%;
  background-color: orange;
`;
const Button = styled(motion.button)`
  border: none;
  background-color: white;

  width: 100px;
  height: 50px;
  border-radius: 10px;
  margin: 10px;
  align-self: center;
  font-weight: 700;
`;
