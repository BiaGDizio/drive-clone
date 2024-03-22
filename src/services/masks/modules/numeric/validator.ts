import { MaskValidators } from '../../types'

function isValid(value: string) {
  return !!value
}

export const validators: MaskValidators = { isValid }
