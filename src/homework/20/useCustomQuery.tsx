import React, { useEffect, useState } from 'react';
import { getTodos } from './api';

export interface ITodo {
  id: string;
  order: number;
  title: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}

interface IUseCustomQueryReturn {
  data: ITodo[];
  isLoading: boolean;
  refetch: () => void;
}

type TUseCustomQuery = () => IUseCustomQueryReturn;

const useCustomQuery: TUseCustomQuery = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<ITodo[]>([]);
  const refetch = async () => {
    setIsLoading(true);
    getTodos().then((todos: ITodo[]) => {
      setData(todos);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    refetch();
  }, []);

  return { data, isLoading, refetch };
};

export default useCustomQuery;
