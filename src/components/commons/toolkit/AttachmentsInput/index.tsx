// External Libraries
import React, { ChangeEvent, DragEvent, useRef, useState } from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Utils
import { MAX_SIZE_IN_MB } from './constants'

// Styles
import {
  Content,
  Container,
  DragHandler,
  HiddenInput,
  SearchButton
} from './styles'

interface Props {
  onFilePick: (files: File[]) => void
}

export const AttachmentsInput: React.FC<Props> = ({ onFilePick }) => {
  // Refs
  const inputRef = useRef<HTMLInputElement>(null)

  // States
  const [dragActive, setDragActive] = useState(false)

  // Functions
  function handleSearchClick(event: React.MouseEvent) {
    event.stopPropagation()

    if (inputRef.current) inputRef.current.value = ''
    inputRef.current?.click()
  }

  function handleDrag(event: DragEvent) {
    event.preventDefault()
    event.stopPropagation()

    if (event.type === 'dragleave') setDragActive(false)
    else if (event.type === 'dragenter' || event.type === 'dragover')
      setDragActive(true)
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault()
    event.stopPropagation()

    setDragActive(false)

    const files = Array.from(event.dataTransfer.files)
    onFilePick(files)
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()

    if (!event.target.files) return

    const files = Array.from(event.target.files)
    onFilePick(files)
  }

  return (
    <Container $hovered={dragActive} onDragEnter={handleDrag}>
      <Content id="label-file-upload" onClick={handleSearchClick}>
        <div>
          <Typography variant="b1" fontSize="1.25rem">
            Arraste aqui anexos
          </Typography>

          <Typography variant="b2">
            Até {MAX_SIZE_IN_MB} MB por aquivo
          </Typography>
        </div>

        <SearchButton>
          <Typography as="span" variant="b1" fontWeight="bold">
            Buscar
          </Typography>
        </SearchButton>
      </Content>

      <HiddenInput
        ref={inputRef}
        id="input-file-upload"
        multiple
        type="file"
        onChange={handleInputChange}
      />

      {dragActive ? (
        <DragHandler
          onDrop={handleDrop}
          onDragOver={handleDrag}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
        />
      ) : null}
    </Container>
  )
}
