import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// Q1
function Days(nums) {
  const [L, A, B, C, D] = nums;
  const x = A / C;
  const y = B / D;
  const leftDays = L - Math.max(x, y);

  return Math.floor(leftDays);
}

// Q2
function secsToHMS(working) {
  const s = working % 60;
  const m = parseInt(working / 60, 10) % 60;
  const h = parseInt(parseInt(working / 60, 10) / 60, 10);

  return [h, m, s];
}

// Q3
function newtonWithApple() {
  for (i = 0; i < people.length; i++) {
    if (people[i] === x) {
      return i + 1;
    }
  }
  return 0;
}

// Q4
function branching(isLoading) {
  if (isLoading) {
  }
}

const Homework = () => {
  return <>hello</>;
};

export default Homework;
