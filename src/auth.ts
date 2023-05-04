import { sha256base64 } from 'ohash'
import { zfetch } from './zfetch'
import type { GetAccessTokenBody, GetAccessTokenResponse } from './types/auth'

const baseURL = 'https://oauth.zaloapp.com/v4/oa'

export function getAccessToken(secret_key: string, body: GetAccessTokenBody) {
  return zfetch<GetAccessTokenResponse>('access_token', {
    method: 'POST',
    data: body,
    baseURL,
    headers: { secret_key },
  })
}

export function getCodeChallenge(code_verifier: string) {
  return sha256base64(code_verifier)
}
