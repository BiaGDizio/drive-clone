import { MaskMethods } from '../../types'

export function mask(input?: string): string {
  if (!input) return ''

  let response = input.replace(/\D/g, '')

  if (input.length > 14) {
    response = response.replace(/(^\d{2})(\d)/, '($1) $2')
    response = response.replace(/(\s\d{5})(\d)/, '$1-$2')
  } else {
    response = response.replace(/(^\d{2})(\d)/, '($1) $2')
    response = response.replace(/(\s\d{4})(\d)/, '$1-$2')
  }

  return response
}

export function unmask(input?: string): string {
  if (!input) return ''

  return input.replace(/[)(\s\-+]/g, '')
}

export const masks: MaskMethods = {
  mask,
  unmask
}
