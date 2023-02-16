import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, store, Todo } from './store';
import ToDo from './ToDo';

const App = () => {
  const [input, setInput] = useState('');
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event?.target.value);
  };

  const todos = useSelector(
    (state: ReturnType<typeof store.getState>) => state.getTodos.todos
  );
  const dispatch = useDispatch();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={input} onChange={onChange} />
        <button>Add</button>
      </form>
      {todos?.map((todo: Todo) => (
        <ToDo
          key={todo.id}
          text={todo.title}
          onBtnClick={() => dispatch(deleteTodo(todo.id))}
          id={todo.id}
        />
      ))}
    </>
  );
};

export default App;
