import styled, { css } from 'styled-components'
import { anchors, FontWeights } from './config'
import { normalizeEntry } from './utils/normalizeEntry'
import { normalizeWeight } from './utils/normalizeWeight'

type ContainerProps = {
  color?: string | string[]
  fontSize?: string | string[]
  $lineHeight?: string | string[]
  $marginTop?: string | string[]
  $marginLeft?: string | string[]
  $marginRight?: string | string[]
  $marginBottom?: string | string[]
  $align?: 'center' | 'left' | 'right'
  fontWeight?: keyof FontWeights | (keyof FontWeights)[]

  isLoading?: boolean
  fontFamily?: string | string[]
}

const SKELETON_GRADIENT = 'linear-gradient(-45deg, #ECECEC, #FAFAFA)'

const skeleton = css<ContainerProps>`
  background: ${SKELETON_GRADIENT};
  border-radius: 5px;
  background-size: 400% 400%;
  animation: gradient 3s ease infinite;
  width: fit-content;
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

export const Container = styled.div<ContainerProps>`
  ${({
    $align,
    fontSize,
    $lineHeight,
    color,
    $marginTop,
    $marginBottom,
    $marginLeft,
    $marginRight,
    fontFamily,
    fontWeight
  }) =>
    anchors({
      textAlign: normalizeEntry($align),
      fontSize: normalizeEntry(fontSize),
      lineHeight: normalizeEntry($lineHeight),
      color: normalizeEntry(color),
      marginTop: normalizeEntry($marginTop),
      marginBottom: normalizeEntry($marginBottom),
      marginLeft: normalizeEntry($marginLeft),
      marginRight: normalizeEntry($marginRight),
      fontFamily: normalizeEntry(fontFamily),
      fontWeight: normalizeWeight(fontWeight)
    })}

  ${({ isLoading }) => (isLoading ? skeleton : {})}
`
