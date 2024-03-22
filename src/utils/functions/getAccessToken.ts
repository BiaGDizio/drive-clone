import { Auth } from 'aws-amplify'

export async function getAccessToken() {
  const token = (await Auth.currentSession()).getIdToken().getJwtToken()
  return token
}
