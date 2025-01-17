import { API } from '@services/api'
import { HttpResponse } from './response'

export async function getFolder(folderId: string) {
  const url = `/folders/${folderId}`
  const response = await API.get<HttpResponse>(url)
  return response.data
}
