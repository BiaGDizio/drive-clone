// External Libraries
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Typography } from '@components/toolkit/Typography'
// Components

// Styles
import {
  Container,
  ContainerImage,
  ContainerTitle,
  Input,
  RightContent,
  RightContentWrapper
} from './styles'
import { Button } from '@components/buttons/Button'
import { useAuth } from '@hooks/useAuth'
import { useRouter } from 'next/router'

export const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  const { push } = useRouter()

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
            name=""
            id=""
            placeholder="Email"
          />
          <Input
            value={password}
            onChange={handlePasswordChange}
            type="password"
            name=""
            id=""
            placeholder="Senha"
          />
          <Button fitWidth label="Acessar"></Button>
        </RightContent>
      </RightContentWrapper>
    </Container>
  )
}
