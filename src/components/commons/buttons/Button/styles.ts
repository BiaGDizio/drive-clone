import styled from 'styled-components'

import { ButtonVariant } from './types'
import { mapVariantToCss } from './mappers/variant'

interface ContainerProps {
  $color?: string
  $loading?: boolean
  $fitWidth?: boolean
  $variant: ButtonVariant
}

export const Container = styled.button<ContainerProps>`
  width: ${props => (props.$fitWidth ? '100%' : 'max-content')};
  height: max-content;

  position: relative;

  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.button};

  transition: all 0.2s ease-in-out;

  cursor: ${({ $loading }) => ($loading ? 'not-allowed' : 'pointer')};

  &:disabled {
    cursor: not-allowed;
  }

  filter: ${({ $loading }) => ($loading ? 'opacity(0.5)' : 'none')};

  ${({ $variant, $color }) => mapVariantToCss($variant, $color)};
`
