export interface HttpResponse {
  folder: Folder

  files: File[]
  subFolders: Folder[]
}

export interface Folder {
  id: number
  name: string
  created_by?: string
}

export interface File {
  id: string
  name: string
  created_by: string
}
