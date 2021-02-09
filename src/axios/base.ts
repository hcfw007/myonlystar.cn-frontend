import Axios from 'axios'
import { SERVICE_ENDPOINT, SERVICE_PATH, SERVICE_TIMEOUT } from '../../config/config'

const instance = Axios.create({
  baseURL: `${ SERVICE_ENDPOINT }${ SERVICE_PATH }`,
  timeout: SERVICE_TIMEOUT,
})

export const getRequestFactory = (url: string) => async(params: any): Promise<any> => {
  return instance.get(url, { params })
}

export const postRequestFactory = (url: string) => async(data: any): Promise<any> => {
  return instance.post(url, data)
}