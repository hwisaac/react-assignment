import React from "react";

const ToDo = ({ text, onBtnClick, id }: any) => {
  return (
    <li>
      <span>{text}</span>{" "}
      <button name={text} onClick={() => onBtnClick(id)}>
        DEL
      </button>
    </li>
  );
};

export default ToDo;
