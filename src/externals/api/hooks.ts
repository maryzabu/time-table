import { useMutation, useQuery, useQueryClient } from "react-query";

import { QueryKey } from "react-query/types/core/types";
import {
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from "react-query/types/react/types";

export function useApiQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  options: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>
): UseQueryResult<TData, TError> {
  return useQuery<TQueryFnData, TError, TData, TQueryKey>({
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    refetchInterval: false,
    retry: false,
    ...options,
  });
}

export function useApiMutation<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(
  options: UseMutationOptions<TData, TError, TVariables, TContext>
): UseMutationResult<TData, TError, TVariables, TContext> {
  const queryClient = useQueryClient();

  return useMutation<TData, TError, TVariables, TContext>({
    retry: false,
    onSuccess: (data) => {
      if (options.mutationKey) {
        queryClient.setQueryData(options.mutationKey, data);
      }
    },
    ...options,
  });
}
