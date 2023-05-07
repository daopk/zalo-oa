import { zfetch } from './zfetch'
import type { ZNSMessageTemplateResponse, ZNSTemplateInfoResponse } from './types/response'
import type { ZNSTemplateInfo } from './types/zns'

const baseURL = 'https://business.openapi.zalo.me'

/**
 * Get ZNS template info
 * @deprecated use `getZNSTemplateInfo` instead. This function will be removed in the next major version
 */
export function getTemplateInfo(access_token: string, templateId: string | number) {
  return getZNSTemplateInfo(access_token, templateId)
}

export async function getZNSTemplateInfo(access_token: string, templateId: string | number) {
  const data = await zfetch<ZNSTemplateInfoResponse>('template/info', {
    baseURL,
    params: {
      template_id: templateId,
    },
    headers: {
      access_token,
    },
  })
  if (data?.error === 0)
    return data.data as ZNSTemplateInfo
  else
  // eslint-disable-next-line no-console
    console.log('getTemplateInfo::error', data)

  return null
}

/**
 * @deprecated use `sendZNSTemplateMessage` instead. This function will be removed in the next major version
 */
export function sendTemplateMessage(access_token: string,
  phone: string,
  template_id: string | number,
  template_data: Record<string, any> = {},
  tracking_id?: string,
  production = false) {
  return sendZNSTemplateMessage(access_token, phone, template_id, template_data, tracking_id, production)
}

export async function sendZNSTemplateMessage(
  access_token: string,
  phone: string,
  template_id: string | number,
  template_data: Record<string, any> = {},
  tracking_id?: string,
  production = false,
) {
  const body: Record<string, any> = {
    phone,
    template_id: String(template_id),
    template_data,
    tracking_id,
  }

  if (!production)
    body.mode = 'development'

  const data = await zfetch<ZNSMessageTemplateResponse>('message/template', {
    baseURL,
    method: 'POST',
    data: body,
    headers: { access_token },
  })

  if (data?.error === 0)
    return data.data
  else
    // eslint-disable-next-line no-console
    console.log('sendTemplateMessage::error', data)

  return null
}
