import React from 'react';
import styled from 'styled-components';
import { deleteTodo } from './api';
import useCustomMutation from './useCustomMutation';

const Btn = styled.div`
  background-color: #ccc;
  border: 1px solid black;
  border-radius: 3px;
  padding: 1px;
  display: inline-flex;
  cursor: pointer;
`;

interface IDeleteBtnProps {
  id: string;
  refetch: () => void;
}

// 삭제버튼 컴포넌트
const DeleteBtn = ({ id, refetch }: IDeleteBtnProps) => {
  const { mutate: deleteTodoBy } = useCustomMutation(deleteTodo);
  const handleClick = () => {
    deleteTodoBy(id)?.then(() => refetch());
  };
  return <Btn onClick={handleClick}>del</Btn>;
};

export default DeleteBtn;
