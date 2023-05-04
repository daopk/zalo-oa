import type { ZaloOAButtonTemplatePayloadElement, ZaloOAFileAttachment, ZaloOAListTemplatePayloadElement, ZaloOAPromotionTemplate, ZaloOAPromotionTemplatePayloadButton, ZaloOAPromotionTemplatePayloadElement, ZaloOATemplateAttachment } from './types/message'

export function buildStickerTemplate(stickerId: string): ZaloOATemplateAttachment {
  return {
    type: 'template',
    payload: {
      template_type: 'media',
      elements: [
        {
          media_type: 'sticker',
          attachment_id: stickerId,
        },
      ],
    },
  }
}

export function buildImageTemplate(url: string, media_type?: 'image' | 'gif'): ZaloOATemplateAttachment {
  if (url) {
    if (!media_type) {
      const ext = url.split('.').pop()
      if (['gif', 'webp'].includes(ext))
        media_type = 'gif'

      else
        media_type = 'image'
    }
    return {
      type: 'template',
      payload: {
        template_type: 'media',
        elements: [{ media_type, url }],
      },
    }
  }
}

export function buildListTemplate(elements: ZaloOAListTemplatePayloadElement[]): ZaloOATemplateAttachment {
  return {
    type: 'template',
    payload: {
      template_type: 'list',
      elements,
    },
  }
}

export function buildButtonTemplate(buttons: ZaloOAButtonTemplatePayloadElement[]): ZaloOATemplateAttachment {
  return {
    type: 'template',
    payload: {
      buttons,
    },
  }
}

export function buildPromotionTemplate(elements: ZaloOAPromotionTemplatePayloadElement[], buttons?: ZaloOAPromotionTemplatePayloadButton[], language: 'VI' | 'EN' = 'VI'): ZaloOAPromotionTemplate {
  return {
    type: 'template',
    payload: {
      template_type: 'promotion',
      language,
      elements,
      buttons,
    },
  }
}

export function buildFileTemplate(fileToken: string): ZaloOAFileAttachment {
  return {
    type: 'file',
    payload: {
      token: fileToken,
    },
  }
}
