import { API } from '@services/api'
import { HttpResponse } from './response'

export async function deleteFile(fileId: string) {
  const url = `/files/${fileId}`
  const response = await API.delete<HttpResponse>(url)
  return response.data
}
