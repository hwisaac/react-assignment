import React, { useState } from "react";
import styled from "styled-components";

interface IRobotStatus {
  position: number;
  direction: string;
}

class Robot {
  position = 0;
  direction = "right" || "left";
  constructor() {
    this.position = 0;
    this.direction = "right";
  }

  go() {
    if (this.direction === "right") {
      this.position += 1;
    } else {
      this.position -= 1;
    }
  }

  turn() {
    if (this.direction === "right") {
      this.direction = "left";
    } else {
      this.direction = "right";
    }
  }

  getStatus() {
    return { position: this.position, direction: this.direction };
  }
}

const myRobot = new Robot();

const Homework = () => {
  const [history, setHistory] = useState<IRobotStatus[]>([myRobot.getStatus()]);
  const handleGoBtn = () => {
    myRobot.go();
    setHistory((prev) => [...prev, myRobot.getStatus()]);
  };
  const handleTurnBtn = () => {
    myRobot.turn();
    setHistory((prev) => [...prev, myRobot.getStatus()]);
  };

  return (
    <>
      <Btn onClick={handleGoBtn}>Go</Btn>
      <Btn onClick={handleTurnBtn}>Turn</Btn>
      <Btn onClick={() => setHistory([])}>Clear</Btn>
      <ul>
        {history.map((el, index) => (
          <li key={index}>
            {el.direction} {el.position}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Homework;

const Btn = styled.button`
  cursor: pointer;
  border: 1px solid black;
  border-radius: 30px;
  height: 30px;
  width: 100px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:active {
    background-color: #ccc;
  }
`;
