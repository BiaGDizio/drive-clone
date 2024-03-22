// External Libraries
import React from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/router'
// Components
// Styles
import { Container, ContainerButtonLogout } from './styles'
import { getFolder } from '@services/api/folders'
import { FileCard } from '@components/toolkit/FileCard'
import { NavBar } from '@components/structure/Navbar'
import { PageContent } from '@pages/Home/styles'
import { Button } from '@components/buttons/Button'
import { useAuth } from '@hooks/useAuth'
export const FolderDetails: React.FC = () => {
  // Hooks
  const { query } = useRouter()
  const { data } = useSWR(`/folders/${query.id}`, fetchFolder)
  const { signOut } = useAuth()
  const { push } = useRouter()

  // Functions

  function showData() {
    return data?.files.map(item => <FileCard key={item.id} file={item} />)
  }

  function fetchFolder() {
    if (!query.id) return null
    return getFolder(query.id as string)
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
      <ContainerButtonLogout>
        <Button onClick={logout} color={'green'} label={'Logout'} />
      </ContainerButtonLogout>
      <PageContent>{showData()}</PageContent>
    </Container>
  )
}

//export const NavBar

//
//

//   <ContainerFolders>
//     <Typography variant="h5">Folders</Typography>
//     {renderFolders()}
//   </ContainerFolders>

//   {renderFiles()}
//
