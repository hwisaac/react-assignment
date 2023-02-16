import React from 'react';
import { Todo } from './store';

const ToDo = ({ text, onBtnClick, id }: any) => {
  return (
    <li>
      <span>{text}</span>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};

export default ToDo;
