// External Libraries
import React from 'react'
// Components

// Styles
import { Container, ContainerIconMenu, ListItem, ListMenu } from './styles'
import Link from 'next/link'
import { Typography } from '../Typography'
import { PAGES } from './constants'
// import { Button } from '@components/buttons/Button'

export const MenuNavBar: React.FC = () => {
  function renderPages() {
    return PAGES.map(item => (
      <Link
        key={item.title}
        href={item.href}
        style={{ textDecoration: 'none' }}
      >
        <ListItem>
          <ContainerIconMenu>{item.icon}</ContainerIconMenu>
          <Typography variant="b1" color="#888888">
            {item.title}
          </Typography>
          {/* <img src="/chevrons/right.svg" alt="" style={} /> */}
        </ListItem>
      </Link>
    ))
  }
  return (
    <Container>
      <ListMenu>{renderPages()}</ListMenu>
    </Container>
  )
}
