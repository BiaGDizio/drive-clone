// Bibliotecas Externas
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from 'react'

// Types
import { IAuthContextData, IUser } from './types'
import { Auth } from 'aws-amplify'

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  // States
  const [user, setUser] = useState<IUser>()

  useEffect(() => {
    getUser()
  }, [])

  // Functions
  async function getUser() {
    try {
      const user = await Auth.currentAuthenticatedUser()
      console.log(user)
      const formatedUser = {
        name: '',
        email: user.attributes.email,
        id: user.attributes.sub
      }
      setUser(formatedUser)
    } catch (error) {
      console.log('ERROR GET USER', error)
    }
  }

  async function signIn(email: string, password: string) {
    await Auth.signIn(email, password)
    await getUser()
  }

  async function signOut() {
    await Auth.signOut()
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext)

  if (!context) throw new Error('useAuth must be within an ContextoProvider')

  return context
}

export { AuthProvider, useAuth }
