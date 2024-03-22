// External Libraries
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useAuth } from '@hooks/useAuth'
import { useRouter } from 'next/router'

// Components
import { Typography } from '@components/toolkit/Typography'
import { Button } from '@components/buttons/Button'

// Assets

// Services

// Types

// Styles
import {
  Container,
  ContainerImage,
  ContainerTitle,
  Input,
  RightContent,
  RightContentWrapper
} from './styles'

export const Login: React.FC = () => {
  // States
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useAuth()
  const { push } = useRouter()

  // Functions
  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    try {
      await signIn(email, password)
      push('/')
    } catch (error) {
      console.log('ERROR', error)
    }
  }
  return (
    <Container>
      <ContainerImage>{/* <Image src={Cow.src} alt="" /> */}</ContainerImage>

      <RightContentWrapper>
        <RightContent onSubmit={handleSubmit}>
          <ContainerTitle>
            <Typography variant="h5">Login</Typography>
          </ContainerTitle>

          <Input
            value={email}
            onChange={handleEmailChange}
            type="email"
            placeholder="Email"
          />

          <Input
            value={password}
            onChange={handlePasswordChange}
            type="password"
            placeholder="Senha"
          />

          <Button fitWidth label="Acessar"></Button>
        </RightContent>
      </RightContentWrapper>
    </Container>
  )
}
