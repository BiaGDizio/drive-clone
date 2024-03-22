// External Libraries
import React from 'react'
// import { FaGoogleDrive } from 'react-icons/fa'

// Components

// Styles
import { Aside, Container, FooterCopyright } from './styles'
import { Button } from '@components/buttons/Button'
import { HeaderNavBar } from '@components/toolkit/HeaderNavBar'
import { MenuNavBar } from '@components/toolkit/MenuNavBar'

export const NavBar: React.FC = () => {
  return (
    <Container>
      <Aside>
        <HeaderNavBar />
        <Button color={'green'} fitWidth label={'Add New +'} />
        <MenuNavBar />
        <FooterCopyright>© 2024, Bianca G. Dizio;</FooterCopyright>
      </Aside>
    </Container>
  )
}
