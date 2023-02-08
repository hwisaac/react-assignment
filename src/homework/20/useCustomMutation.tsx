import React, { useEffect, useState } from 'react';
import { deleteTodo, postTodo } from './api';

interface IUseCustomMutationReturn {
  isPosting: boolean;
  setIsPosting: React.Dispatch<React.SetStateAction<boolean>>;
  mutate: (arg: string) => Promise<any>;
}

const useCustomMutation = (
  mutationFn: (input: string) => Promise<any>
): IUseCustomMutationReturn => {
  const [isPosting, setIsPosting] = useState(false);
  // const [data, setData] = useState<any>();

  const mutate = (arg: string) => {
    if (mutationFn === postTodo) {
      setIsPosting(true);
      return postTodo(arg);
    } else {
      return deleteTodo(arg);
    }
  };

  return { isPosting, setIsPosting, mutate };
};

export default useCustomMutation;
