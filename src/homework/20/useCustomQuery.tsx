import React, { useEffect, useState } from "react";

interface ITodo {
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

export type TFetcher = () => Promise<ITodo[]>;
type TUseCustomQuery = (fetcherFn: TFetcher) => IUseCustomQueryReturn;

const useCustomQuery: TUseCustomQuery = (fetcherFn) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<ITodo[]>([]);
  const refetch = () => {};

  useEffect(() => {
    refetch();
  }, []);

  return { data, isLoading, refetch };
};

export default useCustomQuery;
