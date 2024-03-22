export interface HttpResponse {
  url: string
  fields: {
    bucket: string
    'X-Amz-Algorithm': string
    'X-Amz-Credential': string
    'X-Amz-Date': string
    'X-Amz-Security-Token': string
    key: string
    Policy: string
    'X-Amz-Signature': string
  }
}
