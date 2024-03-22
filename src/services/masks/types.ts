export type MaskType =
  | 'email'
  | 'phone'
  | 'document'
  | 'zipCode'
  | 'date'
  | 'numeric'
  | 'letter'

export type MaskModule = MaskValidators & MaskMethods & MaskConstants

export interface MaskConstants {
  minLength?: number
  maxLength?: number
}

export interface MaskValidators {
  isValid: (value: string) => boolean
}

export interface MaskMethods {
  mask: (value: string) => string
  unmask: (value: string) => string
}
