export interface GetAccessTokenBodyFromRefreshToken {
  grant_type: 'refresh_token'
  app_id: string
  refresh_token: string
}

export interface GetAccessTokenBodyFromAuthCode {
  grant_type: 'authorization_code'
  app_id: string
  code: string
  code_verifier?: string
}

export interface GetAccessTokenResponse {
  'access_token': string
  'refresh_token': string
  'expires_in': string
}

export type GetAccessTokenBody = GetAccessTokenBodyFromRefreshToken | GetAccessTokenBodyFromAuthCode
