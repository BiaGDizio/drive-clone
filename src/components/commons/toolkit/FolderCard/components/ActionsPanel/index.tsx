// External Libraries
import React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Utils
import { SCALE_ANIMATION_PRESETS } from '@utils/animations'

// Styles
import { Container } from './styles'

// Services
import { deleteFolder } from '@services/api/folders/folders.{folderId}.delete'
// import { putFolder } from '@services/api/folders/folders.{folderId}.put'

// Types
import { Folder } from '@services/api/folders/folders.get/response'

// Props
interface Props {
  folder: Folder
  onDeleteSuccess?: () => void
  onRenameSuccess: () => void
  onEdit: () => void
}

export const ActionsPanel: React.FC<Props> = ({
  folder,
  onDeleteSuccess,
  onEdit
}) => {
  //States
  // const [isModalOpen, setIsModalOpen] = useState(false)
  // const [newFolderName, setNewFolderName] = useState('')

  // Functions
  async function handleDeleteFolder() {
    try {
      await deleteFolder(folder.id)
      if (onDeleteSuccess) onDeleteSuccess()
    } catch (error) {
      console.error('Erro ao deletar arquivo:', error)
    }
  }

  return (
    <>
      <Container {...SCALE_ANIMATION_PRESETS}>
        <button onClick={onEdit}>
          <Typography variant="b1">Editar</Typography>
        </button>

        <button onClick={handleDeleteFolder}>
          <Typography variant="b1">Remover</Typography>
        </button>
      </Container>
    </>
  )
}
