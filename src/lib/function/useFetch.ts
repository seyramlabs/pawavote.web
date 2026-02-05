/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { getSession } from 'next-auth/react';

import { useQuery } from '@tanstack/react-query';

export const fetcher = async (config: AxiosRequestConfig): Promise<AxiosResponse> => {
  const session = await getSession()
  // console.log("🚀 ~ fetcher ~ session:", session)
  return await axios({
    ...config,
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      // Authorization: `Bearer ${session?.user.token}`,
      Authorization: `Bearer ${session?.accessToken}`,
      // 'X-Tenant-Domain': session?.user?.tenant,
      'Cache-Control': 'no-cache',
    },
    params: config.params,
  }).then((response) => response || [])
}
export const useFetchData = (key: string, config: any, params?: any, enabled: boolean = true) => {
  const { isFetching, isError, data, error, refetch } = useQuery({
    queryKey: [key, config, params],
    queryFn: () =>
      fetcher({
        ...config,
        params: params,
      }),
    refetchOnWindowFocus: false,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1_000 * 2 ** attemptIndex, 30_000),
    refetchInterval: false,
    staleTime: 0,
    refetchIntervalInBackground: true,
    enabled,
  })

  return {
    data,
    isLoading: isFetching,
    isError,
    error,
    refetch,
  }
}