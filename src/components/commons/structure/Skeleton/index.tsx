// External Libraries
import React from 'react'

// Styles
import { Container, ContainerProps } from './styles'

type Props = ContainerProps

export const Skeleton: React.FC<Props> = props => {
  return <Container {...props} />
}
