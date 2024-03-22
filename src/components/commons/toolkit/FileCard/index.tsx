// External Libraries
import React from 'react'

// Components

// Styles
import { Container } from './styles'
import { File } from '@services/api/folders/folders.get/response'
import { Typography } from '@components/toolkit/Typography'
import Link from 'next/link'
import { FaFile } from 'react-icons/fa'

interface Props {
  file: File
}

export const FileCard: React.FC<Props> = ({ file }) => {
  return (
    <Link
      href={`/file/${file.id}{file.type}`}
      style={{ textDecoration: 'none' }}
    >
      <Container>
        <FaFile />
        <Typography variant="b1">{file.name}</Typography>
      </Container>{' '}
    </Link>
  )
}
