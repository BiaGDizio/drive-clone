// External Libraries
import React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Utils
import { SCALE_ANIMATION_PRESETS } from '@utils/animations'

// Styles
import { Container } from './styles'

// Services
import { deleteFile } from '@services/api/files/files.{fileId}.delete'

// Types
import { File } from '@services/api/folders/folders.get/response'

// Props
interface Props {
  file: File
  onDeleteSuccess?: () => void
  onRenameSuccess: () => void
  onEdit: () => void
}

export const ActionsPanel: React.FC<Props> = ({
  file,
  onDeleteSuccess,
  onEdit
}) => {
  //States

  // Functions
  async function handleDeleteFile() {
    try {
      await deleteFile(file.id)
      if (onDeleteSuccess) onDeleteSuccess()
    } catch (error) {
      console.error('Erro ao deletar arquivo:', error)
    }
  }

  return (
    <Container {...SCALE_ANIMATION_PRESETS}>
      <button onClick={onEdit}>
        <Typography variant="b1" color={'grey'}>
          Editar
        </Typography>
      </button>

      <button onClick={handleDeleteFile}>
        <Typography variant="b1" color={'grey'}>
          Remover
        </Typography>
      </button>
    </Container>
  )
}
