import { zfetch } from './zfetch'
import type { ZaloOAAttachment, ZaloOAPromotionTemplate } from './types/message'
import type { SendMessageResponse } from './types/response'

const baseUrlV3 = 'https://openapi.zalo.me/v3.0/oa/message'

export async function sendPromotionMessage(access_token: string, user_id: string, attachment: ZaloOAPromotionTemplate) {
  const body = {
    recipient: { user_id },
    message: {
      attachment,
    },
  }

  return zfetch<SendMessageResponse>('promotion', {
    method: 'POST',
    baseURL: baseUrlV3,
    data: body,
    headers: { access_token },
  })
}

export async function sendCSMessage(access_token: string, user_id: string, messageText?: string, attachment?: ZaloOAAttachment, quote_message_id?: string) {
  const body = {
    recipient: { user_id },
    message: {
      text: messageText,
      quote_message_id,
      attachment,
    },
  }

  return zfetch<SendMessageResponse>('cs', {
    method: 'POST',
    baseURL: baseUrlV3,
    data: body,
    headers: { access_token },
  })
}

// TODO: sendTransactionMessage
