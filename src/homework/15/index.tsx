import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
// import "./tailwind.css"; [주석 해제]

export function cls(...classnames: string[]) {
  return classnames.join(" ");
}

const Homework = () => {
  return <h1>#15 Tailwind 연습하기</h1>;
};

export default Homework;
