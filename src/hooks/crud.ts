// import axiosConfig from '@/lib/axios-config'
import axios from 'axios';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from 'axios';
import { getSession } from 'next-auth/react';

export const useCrud = async (config: any,
  //  contentType?: any
  ): Promise<{ success: boolean; data: any; message: string } | undefined> => {
  const session = await getSession()
  try {
    const response = await axios({
      ...config,
      url: `${process.env.NEXT_PUBLIC_API_URL}${config?.url}`,
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        'Content-Type': `${config?.contentType == 'multipart/form-data' ? 'multipart/form-data' : 'application/json'}`,
      },
    })

    // console.log("CRUD responses", response);
    //
    // return { success: true, data: response.data, message: response.statusText };
    return {
      success: true,
      data: response?.data,
      message: response?.statusText,
    }
  } catch (error: any) {
    if (error instanceof AxiosError) {
      return {
        success: false,
        data: null,
        message: error.message,
      }
    }
  }
}

export const UseCrud = async (config: any): Promise<any> => {
  const session = await getSession()
  return axios({
    ...config,
    url: `${process.env.NEXT_PUBLIC_API_URL}${config?.url}`,
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
    },
  })
}
