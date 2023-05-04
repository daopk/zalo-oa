interface ZaloOAMediaTemplatePayloadElement {
  media_type: string
  url?: string
  attachment_id?: string
}

type ZaloOAListTemplatePayloadElementAction = {
  type: 'oa.open.url'
  url: string
} | {
  type: 'oa.query.hide' | 'oa.query.show'
  /**
       * Payload should be a string that starts with #
       */
  payload: string
} | {
  type: 'oa.open.phone'
  payload: {
    phone_code: string
  }
} | {
  type: 'oa.open.sms'
  payload: {
    content: string
    phone_code: string
  }
}

export type ZaloOAButtonTemplatePayloadElement = {
  /**
   * Max length: 100
   */
  title: string
} & (
  | {
    type: 'oa.open.url'
    payload: {
      url: string
    }
  }
  | {
    type: 'oa.query.hide' | 'oa.query.show'
    payload: string
  }
  | {
    type: 'oa.open.phone'
    payload: {
      phone_code: string
    }
  }
  | {
    type: 'oa.open.sms'
    payload: {
      content: string
      phone_code: string
    }
  }
)

export interface ZaloOAListTemplatePayloadElement {
  title: string
  subtitle?: string
  image_url: string
  default_action?: ZaloOAListTemplatePayloadElementAction
}

export interface ZaloOAMediaTemplatePayload {
  template_type: 'media'
  elements: ZaloOAMediaTemplatePayloadElement[]
}

export interface ZaloOAListTemplatePayload {
  template_type: 'list'
  elements: ZaloOAListTemplatePayloadElement[]
}

export interface ZaloOAButtonTemplatePayload {
  template_type?: 'button'
  buttons: ZaloOAButtonTemplatePayloadElement[]
}

export type ZaloOAPromotionTemplatePayloadElement = {
  type: 'banner'
  image_url?: string
  attachment_id?: string
} | {
  type: 'header' | 'text'
  content: string
  align?: 'left' | 'center' | 'right'
} | {
  type: 'table'
  content: { key: string; value: string }[]
}

export type ZaloOAPromotionTemplatePayloadButton = ZaloOAButtonTemplatePayloadElement & {
  image_icon: string
}

export interface ZaloOAPromotionTemplatePayload {
  template_type: 'promotion'
  language?: 'VI' | 'EN'
  elements: ZaloOAPromotionTemplatePayloadElement[]
  buttons?: ZaloOAPromotionTemplatePayloadButton[]
}

export type ZaloOATemplatePayload = ZaloOAMediaTemplatePayload | ZaloOAListTemplatePayload | ZaloOAButtonTemplatePayload

export interface ZaloOATemplateAttachment {
  type: 'template'
  payload: ZaloOATemplatePayload
}

export interface ZaloOAPromotionTemplate {
  type: 'template'
  payload: ZaloOAPromotionTemplatePayload
}

export interface ZaloOAFileAttachment {
  type: 'file'
  payload: {
    token: string
  }
}

export type ZaloOAAttachment = ZaloOATemplateAttachment | ZaloOAFileAttachment
