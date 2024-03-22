import { theme } from '@globals/theme'
import { TypeVariants } from './types'
import facepaint from 'facepaint'

export const anchors = facepaint([
  '@media(min-width: 321px)', // Mobile S
  '@media(min-width: 376px)', // Mobile M
  '@media(min-width: 426px)', // Mobile L
  '@media(min-width: 769px)', // Tablet
  '@media(min-width: 1026px)', // Laptop
  '@media(min-width: 1441px)', // Laptop L
  '@media(min-width: 2561px)' // 4K
])

const FONT_FAMILY = 'Roboto, sans-serif'

export interface FontWeights {
  thin: number
  light: number
  regular: number
  medium: number
  bold: number
  black: number
}

export const weights: FontWeights = {
  thin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  black: 900
}

export const variants: TypeVariants = {
  h1: {
    fontSize: ['3rem'],
    $lineHeight: ['120%'],
    color: [theme.colors.text.primary],
    fontFamily: [FONT_FAMILY],
    fontWeight: ['bold'],
    as: 'h1'
  },
  h2: {
    fontSize: ['2.5rem'],
    $lineHeight: ['120%'],
    color: [theme.colors.text.primary],
    fontFamily: [FONT_FAMILY],
    fontWeight: ['bold'],
    as: 'h2'
  },
  h3: {
    fontSize: ['2rem'],
    $lineHeight: ['120%'],
    color: [theme.colors.text.primary],
    fontFamily: [FONT_FAMILY],
    fontWeight: ['bold'],
    as: 'h3'
  },
  h4: {
    fontSize: ['1.75rem'],
    $lineHeight: ['120%'],
    color: [theme.colors.text.primary],
    fontFamily: [FONT_FAMILY],
    fontWeight: ['bold'],
    as: 'h4'
  },
  h5: {
    fontSize: ['1.5rem'],
    $lineHeight: ['120%'],
    color: [theme.colors.text.primary],
    fontFamily: [FONT_FAMILY],
    fontWeight: ['bold'],
    as: 'h5'
  },
  b1: {
    fontSize: ['1rem'],
    $lineHeight: ['120%'],
    color: [theme.colors.text.primary],
    fontFamily: [FONT_FAMILY],
    fontWeight: ['medium'],
    as: 'p'
  },
  b2: {
    fontSize: ['0.8rem'],
    $lineHeight: ['120%'],
    color: [theme.colors.text.secondary],
    fontFamily: [FONT_FAMILY],
    fontWeight: ['medium'],
    as: 'p'
  },
  b3: {
    fontSize: ['0.8rem'],
    $lineHeight: ['120%'],
    color: [theme.colors.text.secondary],
    fontFamily: [FONT_FAMILY],
    fontWeight: ['medium'],
    as: 'p'
  },
  caption: {
    fontSize: ['0.75rem'],
    $lineHeight: ['120%'],
    color: [theme.colors.text.primary],
    fontFamily: [FONT_FAMILY],
    fontWeight: ['regular'],
    as: 'p'
  },
  legal: {
    fontSize: ['0.625rem'],
    $lineHeight: ['120%'],
    color: [theme.colors.text.primary],
    fontFamily: [FONT_FAMILY],
    fontWeight: ['regular'],
    as: 'p'
  }
}
