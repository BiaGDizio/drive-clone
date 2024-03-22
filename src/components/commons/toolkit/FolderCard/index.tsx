// External Libraries
import React from 'react'

// Components

// Styles
import { Container } from './styles'
import { Folder } from '@services/api/folders/folders.get/response'
import { Typography } from '@components/toolkit/Typography'
import Link from 'next/link'
import { FaFolder } from 'react-icons/fa'

interface Props {
  folder: Folder
}

export const FolderCard: React.FC<Props> = ({ folder }) => {
  return (
    <Link href={`/folder/${folder.id}`} style={{ textDecoration: 'none' }}>
      <Container>
        <FaFolder color="grey" />
        <Typography variant="b1">{folder.name}</Typography>
      </Container>
    </Link>
  )
}
