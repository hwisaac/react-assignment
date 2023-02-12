import React, { useEffect, useState } from 'react';
import { deleteTodo, postTodo } from './api';

interface IUseCustomMutationReturn {
  data: string;
  isLoading: boolean;
  mutate: (arg: string) => Promise<any>;
}

const useCustomMutation = (
  mutationFn: (input: string) => Promise<any>
): IUseCustomMutationReturn => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const mutate = async (arg: string) => {
    setIsLoading(true);
    await mutationFn(arg).then(() => {
      setIsLoading(false);
    });
  };

  return { data, isLoading, mutate };
};

export default useCustomMutation;
