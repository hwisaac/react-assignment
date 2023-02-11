import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
  todos: string[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<string>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos.splice(action.payload, 1);
    },
  },
});

export const { createTodo, deleteTodo } = todoSlice.actions;

export default configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
