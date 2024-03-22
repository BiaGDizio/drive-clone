// External Libraries
import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'

// Components
import { ActionsPanel } from './components/ActionsPanel'
import { Typography } from '@components/toolkit/Typography'
import RenameModal from '../Modal'

// Assets
import { FaFolder } from 'react-icons/fa'
import { CiMenuKebab } from 'react-icons/ci'

// Services
import { putFolder } from '@services/api/folders/folders.{folderId}.put'

// Types
import { Folder } from '@services/api/folders/folders.get/response'

// Styles
import { ActionButtonContainer, Container, Wrapper } from './styles'
import { putFile } from '@services/api/files/files.{fileId}.put'

interface Props {
  folder: Folder
  onDeleteSuccess?: () => void
  onRenameSuccess: () => void
}

export const FolderCard: React.FC<Props> = ({
  folder,
  onDeleteSuccess,
  onRenameSuccess
}) => {
  // States
  const [popupVisible, setPopupVisible] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  //Functions
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

  async function handleRenameFolder(newFolderName: string) {
    try {
      await putFolder({ id: folder.id, newName: newFolderName })
      setIsModalOpen(false)
      if (onRenameSuccess) onRenameSuccess()
    } catch (error) {
      console.error('Erro ao renomear pasta:', error)
    }
  }

  const handleEditFolder = () => {
    setIsModalOpen(true)
  }

  function handleDragStart(event: React.DragEvent<HTMLDivElement>) {
    // Define o ID da pasta sendo arrastada
    event.dataTransfer.setData('folderId', folder.id as unknown as string)
  }

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    // Previne o comportamento padrão para permitir soltar o item arrastado
    event.preventDefault()
  }

  async function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault()
    if (event.dataTransfer.getData('fileId')) {
      await handleDropFile(event.dataTransfer.getData('fileId'))
      return event.dataTransfer.clearData()
    }

    // Obtém o ID da pasta de onde foi arrastada
    const sourceFolderId = parseInt(event.dataTransfer.getData('folderId'), 10)

    // Obtém o ID da pasta onde foi soltada (a pasta atual)
    const targetFolderId = parseInt(folder.id.toString())

    // Verifica se a pasta não está sendo solta nela mesma
    if (sourceFolderId !== targetFolderId) {
      try {
        // Chama a função para mover a pasta para dentro da pasta atual
        await putFolder({ id: sourceFolderId, newFolderId: targetFolderId })

        // Limpa os dados de transferência após o drop
        event.dataTransfer.clearData()

        // Atualiza o estado ou realiza outras operações necessárias após o drop
        console.log(
          `Pasta ${sourceFolderId} movida para dentro da pasta ${targetFolderId}`
        )
      } catch (error) {
        console.error('Erro ao mover pasta:', error)
      }
    }
  }

  async function handleDropFile(fileId: string) {
    // inserir lógica do file
    try {
      await putFile({ id: fileId, newFolderId: folder.id })
      console.log(`Arquivo ${fileId} movido para a pasta ${folder.id}`)
      onRenameSuccess()
    } catch (error) {
      console.error('Erro ao mover arquivo:', error)
    }
  }

  return (
    <Wrapper
      ref={popupRef}
      draggable="true"
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <Link
        href={`/folder/${folder.id}?name=${folder.name}`}
        style={{ textDecoration: 'none' }}
      >
        <Container>
          <FaFolder color="grey" />

          <Typography variant="b1" $lineHeight="100%" color={'grey'}>
            {folder.name}
          </Typography>
        </Container>
      </Link>

      <ActionButtonContainer>
        <CiMenuKebab onClick={togglePopup} />

        <AnimatePresence initial={false}>
          {popupVisible && (
            <ActionsPanel
              folder={folder}
              onDeleteSuccess={onDeleteSuccess}
              onRenameSuccess={onRenameSuccess}
              onEdit={handleEditFolder}
            />
          )}
        </AnimatePresence>
      </ActionButtonContainer>

      {isModalOpen && (
        <RenameModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          currentItemName={folder.name}
          onSave={handleRenameFolder}
          title="Editar Pasta"
        ></RenameModal>
      )}
    </Wrapper>
  )
}
