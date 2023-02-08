import React from "react";

const ToDo = ({ text, onBtnClick, id }: any) => {
  return (
    <li>
      <span>{text}</span>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};

export default ToDo;
