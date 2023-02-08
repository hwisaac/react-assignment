import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TFetcher } from "./useCustomQuery";
import { postTodos, deleteTodos } from "./api";

interface IUseCustomMutationReturn {
  addLoading: boolean;
  setAddLoading: Dispatch<SetStateAction<boolean>>;
  mutate: (input: string) => Promise<any>;
}
const useCustomMutation = (
  mutationFn: (input: string) => Promise<any>
): IUseCustomMutationReturn => {
  const [addLoading, setAddLoading] = useState(false);

  const mutate = (input: string) => {
    if (mutationFn === postTodos) {
      setAddLoading(true);
      return postTodos(input);
    } else return deleteTodos(input);
  };

  return { addLoading, setAddLoading, mutate };
};

export default useCustomMutation;
