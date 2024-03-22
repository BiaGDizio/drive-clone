import { API } from '@services/api'
import { HttpResponse } from './response'
import { HttpPutFilePayload } from './request'

export async function putFile(params: HttpPutFilePayload) {
  const { id, newName, newFolderId } = params
  const url = `/files/${id}`
  const response = await API.put<HttpResponse>(url, { newName, newFolderId })
  return response.data
}
