import FormData from 'form-data'
import type { ZaloOAResponse } from './types/response'
import { zfetch } from './zfetch'

// eslint-disable-next-line n/prefer-global/buffer
type FileType = Blob | File | Buffer

const baseURL = 'https://openapi.zalo.me/v2.0/oa/upload'

export function uploadImage(access_token: string, file: FileType, filename: string) {
  const data = new FormData()
  data.append('file', file, { filename })

  return zfetch<ZaloOAResponse<{ attachment_id: string }>>('image', {
    method: 'POST',
    baseURL,
    data,
    headers: { access_token },
  })
}

export function uploadGif(access_token: string, file: FileType, filename: string) {
  const data = new FormData()
  data.append('file', file, { filename })

  return zfetch<ZaloOAResponse<{ attachment_id: string }>>('gif', {
    method: 'POST',
    baseURL,
    data,
    headers: { access_token },
  })
}

export function uploadFile(access_token: string, file: FileType, filename: string) {
  const data = new FormData()
  data.append('file', file, { filename })

  return zfetch<ZaloOAResponse<{ token: string }>>('file', {
    method: 'POST',
    baseURL,
    data,
    headers: { access_token },
  })
}
