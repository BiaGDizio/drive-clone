import { masks } from './mask'
import { validators } from './validator'
import { constants } from './constants'

import { MaskModule } from '@services/masks/types'

export const DocumentModule: MaskModule = {
  ...masks,
  ...validators,
  ...constants
}
