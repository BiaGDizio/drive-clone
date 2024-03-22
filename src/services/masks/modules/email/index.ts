import { masks } from './mask'
import { validators } from './validator'

import { MaskModule } from '@services/masks/types'

export const EmailModule: MaskModule = {
  ...masks,
  ...validators
}
