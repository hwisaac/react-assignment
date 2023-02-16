import React, { EventHandler, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import useCustomQuery from './useCustomQuery';
import useCustomMutation from './useCustomMutation';
import { useForm } from 'react-hook-form';
import DeleteBtn from './DeleteBtn';
import { getTodos, postTodo } from './api';
import { link } from 'fs';

interface ITodo {
  id: string;
  order: number;
  title: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}

const Homework = () => {
  const { data, isLoading, refetch } = useCustomQuery();
  const { isLoading: isEditing, mutate } = useCustomMutation(postTodo);
  const [input, setInput] = useState('');
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 할일 추가하면 유저가 입력한 값을 받아 mutate함수 실행
    // 할일 추가되면 새로 할일 불러오기
    mutate(input).then(() => {
      refetch();
    });
    setInput('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="new Todo"
          value={input}
          onChange={onChange}
        />
        <button type="submit">추가</button>
      </form>
      {isLoading || isEditing ? <span>로딩중 ...</span> : null}
      <ul>
        {data &&
          data.map((todo) => (
            <li key={todo.id}>
              {todo.title}
              <DeleteBtn id={todo.id} refetch={refetch} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Homework;
