import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";

const Homework = () => {
  const [refresh, setRefresh] = useState(true);
  const clickHandler = () => {
    setRefresh((prev) => !prev);
    setTimeout(() => setRefresh((prev) => !prev), 100);
  };
  return (
    <Wrap>
      {refresh && (
        <>
          <Box1 />
          <Box2 />
          <Box3 />
        </>
      )}

      <Btn onClick={clickHandler}>re-animate</Btn>
    </Wrap>
  );
};

export default Homework;

const Wrap = styled.section`
  background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 200px);
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 200px;
`;
