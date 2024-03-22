import { API } from '@services/api'
import { HttpResponse } from './response'

export async function getFolders() {
  const url = `/folders`

  const response = await API.get<HttpResponse>(url)
  return response.data
}
