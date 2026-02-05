import { getSession } from 'next-auth/react';

import { axiosInstance } from './axios-instance';

/* eslint-disable @typescript-eslint/no-explicit-any */
// import { IGeneric } from '@/types/interfaces'
// import { axiosInstance } from './axios-instance';

const axiosConfig = async (config: any) => {
  const session = await getSession()

  // if (!session) {
  //   throw new Error('Not authenticated')
  // }

  return axiosInstance({
    ...config,
    url: `${config?.url}`,
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
      'Content-Type': `${config?.contentType == 'multipart/form-data' ? 'multipart/form-data' : 'application/json'}`,
      // 'X-Tenant-Domain': session?.user?.tenant || 'benmeredith',
    },
  })
}
export default axiosConfig
