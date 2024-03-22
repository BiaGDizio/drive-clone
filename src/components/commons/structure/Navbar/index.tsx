/* eslint-disable @typescript-eslint/no-explicit-any */
// External Libraries
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

// Components
import { Button } from '@components/buttons/Button'
import { MenuNavBar } from '@components/toolkit/MenuNavBar'
import { HeaderNavBar } from '@components/toolkit/HeaderNavBar'
import { AttachmentsInput } from '@components/toolkit/AttachmentsInput'

// Services
import { createSignedUrl } from '@services/api/folders'

// Styles
import {
  Aside,
  Container,
  FooterCopyright,
  ContainerAttachmentsInput,
  ContainerButtonLogout
} from './styles'

import { useAuth } from '@hooks/useAuth'
import { postFolders } from '@services/api/folders/folders.post'
import RenameModal from '@components/toolkit/Modal'

interface Props {
  onFileUploaded?: () => void
}

export const NavBar: React.FC<Props> = ({ onFileUploaded }) => {
  // Hooks
  const { query, push } = useRouter()
  const { signOut } = useAuth()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  // Functions
  async function handleFilePick(files: File[]) {
    try {
      for (const file of files) {
        const params = {
          folderId: (query.id as string) || '1',
          name: file.name,
          type: file.type
        }

        const response = await createSignedUrl(params)

        const formData = new FormData()

        for (const key in response.fields) {
          formData.append(key, (response.fields as any)[key])
        }

        formData.append('file', file)

        await axios.post(response.url, formData)

        if (onFileUploaded) onFileUploaded()
      }
    } catch (err) {
      console.log(err)
    }
  }
  async function logout() {
    try {
      await signOut()
      push('/login')
    } catch (error) {
      console.log('ERROR', error)
    }
  }

  async function addNewFolder() {
    setIsModalOpen(true)
  }

  async function saveNewFolder(name: string) {
    try {
      await postFolders(name, parseInt(query.id as string) || 1)
      setIsModalOpen(false)
      if (onFileUploaded) onFileUploaded()
    } catch (error) {
      console.error('Error creating folder:', error)
    }
  }

  return (
    <Container>
      <Aside>
        <HeaderNavBar />

        <Button
          color={'green'}
          fitWidth
          label={'Add New +'}
          onClick={addNewFolder}
        />

        <MenuNavBar />

        <ContainerAttachmentsInput>
          <AttachmentsInput onFilePick={handleFilePick} />
        </ContainerAttachmentsInput>

        <ContainerButtonLogout>
          <Button onClick={logout} color={'green'} label={'Logout'} />
        </ContainerButtonLogout>

        {isModalOpen && (
          <RenameModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={saveNewFolder}
            title="Nova Pasta"
          ></RenameModal>
        )}

        <FooterCopyright>© 2024, Bianca G. Dizio;</FooterCopyright>
      </Aside>
    </Container>
  )
}
