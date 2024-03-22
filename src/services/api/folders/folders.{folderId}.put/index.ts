import { API } from '@services/api'
import { HttpResponse } from './response'
import { HttpPutFolderPayload } from './request'

export async function putFolder(params: HttpPutFolderPayload) {
  const { id, newName, newFolderId } = params
  const url = `/folders/${id}`
  const response = await API.put<HttpResponse>(url, { newName, newFolderId })
  return response.data
}
