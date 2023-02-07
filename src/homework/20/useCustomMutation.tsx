import React, { useEffect, useState } from "react";

interface IUseCustomMutationReturn {
  data: any;
  isLoading: boolean;
  refetch: () => Promise<any>;
}
const useCustomMutation = (mutationFn: (input: string) => Promise<any>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>();

  const mutate = () => {};

  return { data, isLoading, mutate };
};

export default useCustomMutation;
