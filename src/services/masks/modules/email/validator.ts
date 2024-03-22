import { MaskValidators } from '@services/masks/types'

export function isValid(text: string) {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  return regex.test(text)
}

export const validators: MaskValidators = { isValid }
