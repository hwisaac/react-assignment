import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
  todos: string[];
}

interface EditData {
  id: number;
  editVal: string;
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
    editTodo: (state, action: PayloadAction<EditData>) => {
      state.todos.splice(action.payload.id, 1, action.payload.editVal);
    },
  },
});

export const { createTodo, deleteTodo, editTodo } = todoSlice.actions;

export default configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
