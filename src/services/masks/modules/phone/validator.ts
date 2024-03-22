import { MaskValidators } from '../../types'

function isValid(text: string) {
  if (text) {
    text = text.replace(/[)(\s\-+]/g, '')

    switch (text.length) {
      case 10:
        return true
      case 11:
        return true
      case 14:
        return true
      case 15:
        return true
      default:
        return false
    }
  }

  return false
}

export const validators: MaskValidators = { isValid }
