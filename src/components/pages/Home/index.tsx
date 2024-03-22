/* eslint-disable @typescript-eslint/no-explicit-any */
// External Libraries
import React from 'react'
import useSWR from 'swr'

// Components
import { Typography } from '@components/toolkit/Typography'
import { Skeleton } from '@components/structure/Skeleton'
import { NavBar } from '@components/structure/Navbar'
import { FileCard } from '../../commons/toolkit/FileCard'
import { FolderCard } from '../../commons/toolkit/FolderCard'

// Assets
import { IoIosArrowForward } from 'react-icons/io'

// Services
import { getFolders } from '@services/api/folders'

// Types

// Styles
import {
  Container,
  ContainerFiles,
  ContainerFolders,
  ContainerNameType,
  ContainerSkeleton,
  ContainerTypography,
  HeaderDrive,
  Line,
  PageContent
} from './styles'

export const Home: React.FC = () => {
  const { data, isLoading, mutate } = useSWR('/folders', getFolders)
  // Fuctions
  function renderFiles() {
    if (isLoading) {
      return Array.from({ length: 5 }, (_, index) => (
        <ContainerSkeleton key={index}>
          <Skeleton width="100%" height="2rem" />
        </ContainerSkeleton>
      ))
    }
    return data?.files.map(item => (
      <FileCard
        key={item.id}
        file={item}
        onDeleteSuccess={mutate}
        onRenameSuccess={mutate}
      />
    ))
  }

  function renderFolders() {
    if (isLoading) {
      return Array.from({ length: 5 }, (_, index) => (
        <Skeleton key={index} width="9rem" height="3rem" />
      ))
    }

    return data?.subFolders.map(item => (
      <FolderCard
        key={item.id}
        folder={item}
        onDeleteSuccess={mutate}
        onRenameSuccess={mutate}
      />
    ))
  }

  return (
    <Container>
      <NavBar onFileUploaded={mutate} />

      <PageContent>
        <ContainerTypography>
          <HeaderDrive>
            My drive
            <IoIosArrowForward />
          </HeaderDrive>
        </ContainerTypography>

        <Line />

        <ContainerTypography>
          <Typography variant="h5" color={'grey'}>
            Folders
          </Typography>
        </ContainerTypography>

        <ContainerFolders>{renderFolders()}</ContainerFolders>

        <Line />

        <ContainerTypography>
          <Typography variant="h5" color={'grey'}>
            Files
          </Typography>
        </ContainerTypography>

        <ContainerNameType>
          <Typography variant="b1" color={'grey'}>
            Name
          </Typography>
          <Typography variant="b1" color={'grey'}>
            Type
          </Typography>
        </ContainerNameType>

        <ContainerFiles>{renderFiles()}</ContainerFiles>
      </PageContent>
    </Container>
  )
}
