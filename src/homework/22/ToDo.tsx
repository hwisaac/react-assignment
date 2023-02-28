import React from "react";

interface IToDoProps {
  text: string;
  onClickDelete: (id: number) => void;
  id: number;
  onClickEdit: (id: number) => void;
}

const ToDo = ({ text, onClickDelete, id, onClickEdit }: IToDoProps) => {
  return (
    <li>
      <span>{text}</span>
      {" :: "}
      <button onClick={() => onClickEdit(id)}>EDIT</button>
      {" | "}
      <button name={text} onClick={() => onClickDelete(id)}>
        DEL
      </button>
    </li>
  );
};

export default ToDo;
