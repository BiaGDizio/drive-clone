import { API } from '@services/api'
import { HttpResponse } from './response'

export async function postFolders(name: string, folderId: number) {
  const url = `/folders`

  const response = await API.post<HttpResponse>(url, { name, folderId })
  return response.data
}
