// External Libraries
import React from 'react'

// Components

// Styles
import {
  Container,
  ContainerButtonLogout,
  ContainerFolders,
  PageContent
} from './styles'
import { NavBar } from '@components/structure/Navbar'
import { Button } from '@components/buttons/Button'
import { useAuth } from '@hooks/useAuth'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { getFolders } from '@services/api/folders'
import { FileCard } from '../../commons/toolkit/FileCard'
import { FolderCard } from '../../commons/toolkit/FolderCard'
import { Typography } from '@components/toolkit/Typography'
// import { Main } from '@components/structure/Main'

export const Home: React.FC = () => {
  const { signOut } = useAuth()
  const { push } = useRouter()
  const { data } = useSWR('/folders', getFolders)

  function renderFiles() {
    return data?.files.map(item => <FileCard key={item.id} file={item} />)
  }

  function renderFolders() {
    return data?.subFolders.map(item => (
      <FolderCard key={item.id} folder={item} />
    ))
  }

  async function logout() {
    try {
      await signOut()
      push('/login')
    } catch (error) {
      console.log('ERROR', error)
    }
  }

  return (
    <Container>
      <NavBar />
      <PageContent>
        <ContainerButtonLogout>
          <Button onClick={logout} color={'green'} label={'Logout'} />
        </ContainerButtonLogout>

        <Typography variant="h5">Folders</Typography>

        <ContainerFolders>{renderFolders()}</ContainerFolders>

        <Typography variant="h5">Files</Typography>
        {renderFiles()}
      </PageContent>
    </Container>
  )
}
