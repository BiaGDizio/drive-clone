export interface IAuthContextData {
  user: IUser | undefined
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

export interface IUser {
  id: string
  name: string
  email: string
}
