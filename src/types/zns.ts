export interface ZNSTemplateInfo {
  templateId: number
  templateName: string
  status: string
  listParams: {
    name: string
    require: boolean
    type: string
    maxLength: number
    minLength: number
    acceptNull: boolean
  }[]
  timeout: number
  previewUrl: string
  templateQuality: 'HIGH' | 'MEDIUM' | 'LOW' | 'UNDEFINED'
  templateTag: 'OTP' | 'IN_TRANSACTION' | 'POST_TRANSACTION' | 'ACCOUNT_UPDATE' | 'GENERAL_UPDATE' | 'FOLLOW_UP'
  price: string
  applyTemplateQuota: boolean
  templateDailyQuota: string
  templateRemainingQuota: string
}
