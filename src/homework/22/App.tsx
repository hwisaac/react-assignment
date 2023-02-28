import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTodo, deleteTodo, editTodo } from "./store";
import ToDo from "./ToDo";

interface IsEditData {
  id: number;
  isEdit: boolean;
}

const App = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const todo = useSelector((state: any) => state.todo.todos);
  const dispatch = useDispatch();

  const [value, setValue] = useState<string>("");
  const [editVal, setEditVal] = useState<string>("");
  const [isEditCheck, setIsEditCheck] = useState<IsEditData>({
    id: 0,
    isEdit: false,
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value !== "") {
      dispatch(createTodo(value));
      setValue("");
      return;
    }

    if (isEditCheck.isEdit && editVal !== "") {
      dispatch(editTodo({ id: isEditCheck.id, editVal }));
      setIsEditCheck((prev) => {
        return { id: prev.id, isEdit: false };
      });
      setEditVal("");
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (isEditCheck.isEdit) setEditVal(event.target.value);
    else setValue(event.target.value);
  };

  const onClickDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const onClickEdit = (id: number) => {
    if (inputRef.current !== null) inputRef.current.focus();
    setIsEditCheck({ id, isEdit: true });
  };

  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={onSubmit}>
        <input
          ref={inputRef}
          value={isEditCheck.isEdit ? editVal : value}
          type="text"
          onChange={onChange}
          placeholder={isEditCheck.isEdit ? "EDIT" : "ADD"}
        />
        <button type="submit">{isEditCheck.isEdit ? "EDIT" : "ADD"}</button>
      </form>
      <ul>
        {todo.map((todo: string, index: number) => (
          <ToDo
            key={index}
            onClickDelete={onClickDelete}
            onClickEdit={onClickEdit}
            text={todo}
            id={index}
          />
        ))}
      </ul>
    </>
  );
};

export default App;
