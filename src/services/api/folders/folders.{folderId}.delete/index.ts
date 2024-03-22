import { API } from '@services/api'
import { HttpResponse } from './response'

export async function deleteFolder(folderId: number) {
  const url = `/folders/${folderId}`
  const response = await API.delete<HttpResponse>(url)
  return response.data
}
