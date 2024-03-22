import { API } from '@services/api'
import { HttpResponse } from './response'

export async function getFolder(folderId: string) {
  const url = `/folder/${folderId}`

  const response = await API.get<HttpResponse>(url)
  return response.data
}
