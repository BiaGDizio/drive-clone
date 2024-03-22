export interface HttpResponse {
  folder: Folder
  files: File[]
  subFolders: Folder[]
}

export interface Folder {
  id: number
  name: string
  createdBy?: string
}

export interface File {
  id: string
  name: string
  createdBy: string
  key: string
  type: string
}
