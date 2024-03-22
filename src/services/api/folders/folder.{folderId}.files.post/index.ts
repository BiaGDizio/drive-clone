import { API } from '@services/api'
import { HttpResponse } from './response'
import { HttpPostFilePayload } from './request'

export async function createSignedUrl(params: HttpPostFilePayload) {
  const { folderId, name, type } = params
  const url = `/folders/${folderId}/files`

  const response = await API.post<HttpResponse>(url, { name, type })
  return response.data
}
