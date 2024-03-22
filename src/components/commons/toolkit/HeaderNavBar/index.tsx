// External Libraries
import React from 'react'

// Components

// Styles
import { Container, ContainerIconDrive, ContainerNameDrive } from './styles'
import { FaGoogleDrive } from 'react-icons/fa'

export const HeaderNavBar: React.FC = () => {
  return (
    <Container>
      <ContainerIconDrive>
        <FaGoogleDrive />
      </ContainerIconDrive>
      <ContainerNameDrive>DRIVE</ContainerNameDrive>
    </Container>
  )
}
