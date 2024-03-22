import { masks } from './mask'
import { constants } from './constants'
import { validators } from './validator'

import { MaskModule } from '../../types'

export const DateModule: MaskModule = {
  ...masks,
  ...constants,
  ...validators
}
