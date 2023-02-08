import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
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
  return (
    <>
      <form>
        <input type='text' placeholder='new Todo' />
        <button>추가</button>
      </form>
      <span>{"todo 추가중..."}</span>
      <ul>
        <li>
          (id) / title: title
          <DeleteBtn />
        </li>
      </ul>
    </>
  );
};

export default Homework;
