// External Libraries
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

// Components
import RenameModal from '../Modal'
import { Typography } from '@components/toolkit/Typography'
import { AnimatePresence } from 'framer-motion'
import { ActionsPanel } from './components/ActionsPanel'

// Assets
import { CiMenuKebab } from 'react-icons/ci'
import { FaFile } from 'react-icons/fa'

// Services
import { putFile } from '@services/api/files/files.{fileId}.put'

// Types
import { File, Folder } from '@services/api/folders/folders.get/response'

// Styles
import {
  ActionButtonContainer,
  ActionButtonWrapper,
  Container,
  ContainerFileName,
  ContainerFileType,
  ContainerIcon,
  Div
} from './styles'

interface Props {
  file: File
  onDeleteSuccess?: () => void
  onRenameSuccess: () => void
}

export const FileCard: React.FC<Props> = ({
  file,
  onDeleteSuccess,
  onRenameSuccess
}) => {
  // States
  const [popupVisible, setPopupVisible] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Functions
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setPopupVisible(false)
      }
    }

    if (popupVisible)
      document.body.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.body.removeEventListener('mousedown', handleClickOutside)
    }
  }, [popupVisible])

  function togglePopup() {
    setPopupVisible(prev => !prev)
  }

  async function handleRenameFile(newFileName: string) {
    try {
      await putFile({ id: file.id, newName: newFileName })
      setIsModalOpen(false)
      if (onRenameSuccess) onRenameSuccess()
    } catch (error) {
      console.error('Erro ao renomear pasta:', error)
    }
  }

  const handleEditFile = () => {
    setIsModalOpen(true)
  }

  function handleDragStart(event: React.DragEvent<HTMLDivElement>) {
    // Define o ID da pasta sendo arrastada
    event.dataTransfer.setData('fileId', file.id as unknown as string)
  }

  return (
    <Div ref={popupRef} draggable="true" onDragStart={handleDragStart}>
      <Link
        href={`/file/${file.id}{file.type}`}
        style={{ width: '100%', textDecoration: 'none' }}
      >
        <Container>
          <ContainerIcon>
            <FaFile />
            <ContainerFileName>
              <Typography variant="b1" color="grey">
                {file.name}
              </Typography>
            </ContainerFileName>
          </ContainerIcon>{' '}
          <ContainerFileType>
            <Typography variant="b1" color="grey">
              .{file.type}
            </Typography>
          </ContainerFileType>
        </Container>
      </Link>

      <ActionButtonWrapper>
        <ActionButtonContainer>
          <CiMenuKebab onClick={togglePopup} />

          <AnimatePresence initial={false}>
            {popupVisible && (
              <ActionsPanel
                file={file}
                onDeleteSuccess={onDeleteSuccess}
                onRenameSuccess={onRenameSuccess}
                onEdit={handleEditFile}
              />
            )}
          </AnimatePresence>
        </ActionButtonContainer>
      </ActionButtonWrapper>

      {isModalOpen && (
        <RenameModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          currentItemName={file.name}
          onSave={handleRenameFile}
          title="Editar Arquivo"
        ></RenameModal>
      )}
    </Div>
  )
}
