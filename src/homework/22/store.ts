import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TodosState {
  count: number;
  todos: Todo[];
}
export type Todo = {
  title: string;
  id: number;
};

const initialState: TodosState = {
  count: 0,
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.count++;
      state.todos = [
        {
          title: action.payload,
          id: Date.now(),
        },
        ...state.todos,
      ];
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.count--;
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;

export const store = configureStore({
  reducer: {
    getTodos: todosSlice.reducer,
  },
});
