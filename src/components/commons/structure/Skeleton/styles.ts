import styled from 'styled-components'

const SKELETON_GRADIENT = 'linear-gradient(-45deg, #ECECEC, #FAFAFA)'

export type ContainerProps = {
  width?: string
  height?: string
  $borderRadius?: string
}

export const Container = styled.div<ContainerProps>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};

  background: ${SKELETON_GRADIENT};

  border-radius: ${({ $borderRadius }) => $borderRadius || '5px'};

  background-size: 400% 400%;
  animation: gradient 3s ease infinite;
  color: transparent !important;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`
