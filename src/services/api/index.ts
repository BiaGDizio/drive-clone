// Bibliotecas externas
import { getAccessToken } from '@utils/functions/getAccessToken'
import axios from 'axios'

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_X_API_KEY }
})

API.interceptors.request.use(async function (config) {
  try {
    const token = await getAccessToken()

    if (config && config.headers) {
      config.headers.Authorization = token
    }
    return config
  } catch (e) {
    return config
  }
})
