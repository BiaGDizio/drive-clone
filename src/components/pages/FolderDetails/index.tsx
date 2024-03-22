// External Libraries
import React from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/router'

// Components
import { FileCard } from '@components/toolkit/FileCard'
import { NavBar } from '@components/structure/Navbar'
import { FolderCard } from '@components/toolkit/FolderCard'
import { Typography } from '@components/toolkit/Typography'

// Assets
import { IoIosArrowForward } from 'react-icons/io'

// Styles
import {
  Container,
  ContainerFiles,
  ContainerNameType,
  ContainerSubFolders,
  HeaderDrive,
  PageContent
} from './styles'
import { Line } from '@pages/Home/styles'

// Services
import { getFolder } from '@services/api/folders'

export const FolderDetails: React.FC = () => {
  // Hooks
  const { query } = useRouter()
  const { data, mutate } = useSWR(`/folders/${query.id} `, fetchFolder)

  // Functions
  function showData() {
    return data?.files.map(item => (
      <FileCard
        key={item.id}
        file={item}
        onDeleteSuccess={mutate}
        onRenameSuccess={mutate}
      />
    ))
  }

  function showSubfolders() {
    return data?.subFolders.map(item => (
      <FolderCard
        key={item.id}
        folder={item}
        onDeleteSuccess={mutate}
        onRenameSuccess={mutate}
      />
    ))
  }

  function fetchFolder() {
    if (!query.id) return null

    return getFolder(query.id as string)
  }

  return (
    <Container>
      <NavBar onFileUploaded={mutate} />

      <PageContent>
        <HeaderDrive>
          My drive
          <IoIosArrowForward />
          {query.name}
        </HeaderDrive>
        <Typography variant="h5" color="grey">
          Folders
        </Typography>
        <ContainerSubFolders>{showSubfolders()}</ContainerSubFolders>

        <Line />

        <Typography variant="h5" color="grey">
          Files
        </Typography>

        <Line />

        <ContainerNameType>
          <Typography variant="b1" color={'grey'}>
            Name
          </Typography>
          <Typography variant="b1" color={'grey'}>
            Type
          </Typography>
        </ContainerNameType>

        <ContainerFiles>{showData()}</ContainerFiles>
      </PageContent>
    </Container>
  )
}
