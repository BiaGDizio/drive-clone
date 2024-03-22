import React, { useState } from 'react'
import Modal from 'react-modal'
import {
  ButtonCancel,
  ButtonSave,
  ButtonsContainer,
  Container,
  InputRename
} from './styles'
import { Typography } from '../Typography'

interface Props {
  currentItemName?: string
  onSave: (newName: string) => void
  onClose: () => void
  isOpen: boolean
  title?: string
}

const RenameModal: React.FC<Props> = ({
  currentItemName,
  onSave,
  onClose,
  isOpen,
  title = 'Renomear'
}) => {
  const [newName, setNewName] = useState(currentItemName || '')

  const handleSave = () => {
    onSave(newName)
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value)
  }

  return (
    <Container>
      <Modal
        style={{
          overlay: {
            position: 'fixed',
            backgroundColor: 'transparent',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '20px',
            zIndex: '10'
          },
          content: {
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            top: '350px',
            left: '450px',
            right: '450px',
            bottom: '360px',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px'
          }
        }}
        isOpen={isOpen}
        onRequestClose={onClose}
      >
        <Typography variant="h5" color={'grey'}>
          {title}
        </Typography>
        <InputRename
          type="text"
          value={newName}
          onChange={handleChange}
          placeholder="Insira um nome"
        />
        <ButtonsContainer>
          <ButtonCancel onClick={onClose}>Cancelar</ButtonCancel>
          <ButtonSave onClick={handleSave}>Salvar</ButtonSave>
        </ButtonsContainer>
      </Modal>
    </Container>
  )
}

export default RenameModal
