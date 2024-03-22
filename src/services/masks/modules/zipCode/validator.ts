import { constants } from './constants'

import { MaskValidators } from '../../types'

function isValid(value: string) {
  if (!constants.maxLength) return true
  if (value.length < constants.maxLength) return false
  else return true
}

export const validators: MaskValidators = { isValid }
