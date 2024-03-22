/* eslint-disable react-hooks/rules-of-hooks */
import { useAuth } from '@hooks/useAuth'
import { Login } from '@pages/Login'

export const withAuthentication = (Component: JSX.Element): JSX.Element => {
  // Hooks
  const { user } = useAuth()

  if (!user) {
    return <Login />
  } else return Component
}
