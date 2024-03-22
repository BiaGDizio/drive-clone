import { MaskMethods } from '../../types'

export function mask(input?: string): string {
  if (!input) return ''

  return input.replace(/^\p{L}+$/u, '')
}

export function unmask(input?: string): string {
  if (!input) return ''

  return input
}

export const masks: MaskMethods = {
  mask,
  unmask
}
