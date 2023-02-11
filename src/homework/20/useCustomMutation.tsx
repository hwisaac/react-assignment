import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TFetcher } from "./useCustomQuery";
import { postTodos, deleteTodos } from "./api";

interface IUseCustomMutationReturn {
  data: any;
  isLoading: boolean;
  mutate: (input: string) => Promise<any>;
}
const useCustomMutation = (mutationFn: (input: string) => Promise<any>) => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  // then X async await O
  const mutate = async (input: string) => {
    setIsLoading(true);
    const res = await mutationFn(input);
    setData(res);
    setIsLoading(false);
    return res;
  };

  return { data, isLoading, mutate };
};

export default useCustomMutation;
