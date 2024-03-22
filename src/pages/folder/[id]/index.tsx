import { NextPage } from 'next'
import { withAuthentication } from '@hooks/withAuthentication'
import { FolderDetails } from '@pages/FolderDetails'

const FolderPage: NextPage = () => {
  return withAuthentication(<FolderDetails />)
}

export default FolderPage
