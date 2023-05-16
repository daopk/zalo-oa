import { zfetch } from './zfetch'
import type { GetFollowersResponse, GetOAResponse, GetProfileResponse } from './types/response'

const baseURL = 'https://openapi.zalo.me/v2.0/oa'

export function getUserProfile(access_token: string, user_id: string) {
  const params = { data: JSON.stringify({ user_id }) }

  return zfetch<GetProfileResponse>('getprofile', {
    baseURL,
    params,
    headers: { access_token },
  })
}

export function getOAProfile(access_token: string) {
  return zfetch<GetOAResponse>('getoa', {
    baseURL,
    headers: { access_token },
  })
}

export function getFollowers(access_token: string, offset = 0, count = 50, tag_name?: string) {
  const params = { data: JSON.stringify({ offset, count, tag_name }) }
  return zfetch<GetFollowersResponse>('getfollowers', {
    baseURL,
    params,
    headers: { access_token },
  })
}
