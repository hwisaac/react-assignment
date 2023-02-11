import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import useCustomQuery, { TFetcher } from "./useCustomQuery";
import useCustomMutation from "./useCustomMutation";
import { useForm } from "react-hook-form";
import DeleteBtn from "./DeleteBtn";
import { getTodos, postTodos } from "./api";

interface ITodo {
  id: string;
  order: number;
  title: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}

const Homework = () => {
  const [value, setValue] = useState("");

  const { data, isLoading, refetch } = useCustomQuery(getTodos);
  const {
    data: addData,
    isLoading: addLoading,
    mutate: addTodo,
  } = useCustomMutation(postTodos);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value !== "") {
      await addTodo(value);
      refetch();
      setValue("");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="new Todo"
        />
        <button type="submit">추가</button>
      </form>
      <span>{isLoading ? "Loading..." : null}</span>
      <span>{addLoading ? "todo 추가중..." : null}</span>
      <ul>
        {data &&
          data.map((todo) => (
            <li key={todo.id}>
              ({todo.id}) / title: {todo.title}
              <DeleteBtn id={todo.id} refetch={refetch} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Homework;
