import { DateModule } from './modules/date'
import { PhoneModule } from './modules/phone'
import { EmailModule } from './modules/email'
import { LetterModule } from './modules/letter'
import { ZipCodeModule } from './modules/zipCode'
import { NumericModule } from './modules/numeric'
import { DocumentModule } from './modules/document'

import { MaskModule, MaskType } from './types'

export const MasksModule: Record<MaskType, MaskModule> = {
  date: DateModule,
  phone: PhoneModule,
  email: EmailModule,
  letter: LetterModule,
  zipCode: ZipCodeModule,
  numeric: NumericModule,
  document: DocumentModule
}
