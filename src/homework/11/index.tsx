import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import styled from "styled-components";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";

const Homework = () => {
  return (
    <Wrap>
      <Box1 />
      <Box2 />
      <Box3 />
    </Wrap>
  );
};

export default Homework;

const Wrap = styled.section`
  background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
  width: 100%;
  height: 600vh;
  display: grid;
  grid-template-columns: repeat(3, 300px);
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
