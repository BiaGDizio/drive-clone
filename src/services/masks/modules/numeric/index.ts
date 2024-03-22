import { MaskModule } from '../../types'
import { constants } from './constants'
import { masks } from './mask'
import { validators } from './validator'

export const NumericModule: MaskModule = {
  ...constants,
  ...masks,
  ...validators
}
