// External Libraries
import React from 'react'

// Styles
import { Container } from './styles'

type Props = {
  size?: string
  color?: string
  speed?: string
  thickness?: string
  emptyColor?: string
}

export const Loader: React.FC<Props> = ({ thickness, ...rest }) => {
  return <Container $thickness={thickness} {...rest} />
}
