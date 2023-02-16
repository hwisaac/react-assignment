import React, { useState, ChangeEvent, FormEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTodo, deleteTodo } from "./store";
import ToDo from "./ToDo";

const App = () => {
  const todo = useSelector((state: any) => state.todo.todos);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value !== "") {
      dispatch(createTodo(value));
      setValue("");
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onBtnClick = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={onSubmit}>
        <input value={value} type="text" onChange={onChange} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todo.map((todo: string, index: number) => (
          <ToDo key={index} onBtnClick={onBtnClick} text={todo} id={index} />
        ))}
      </ul>
    </>
  );
};

export default App;
