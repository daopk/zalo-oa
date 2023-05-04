import type { UserProfile } from './profile'
import type { ZNSTemplateInfo } from './zns'

export interface ZaloOAResponse<T = any> {
  error: number
  message: string
  data: T
}

export type SendMessageResponse = ZaloOAResponse<{
  message_id: string
  user_id: string
}>

export type GetProfileResponse = ZaloOAResponse<UserProfile>

export type GetOAResponse = ZaloOAResponse<{
  oa_id: string
  description: string
  name: string
  avatar: string
  cover: string
  is_verified: boolean
}>

export type GetFollowersResponse = ZaloOAResponse<{
  total: number
  followers: {
    user_id: string
  }[]
}>

export type ZNSTemplateInfoResponse = ZaloOAResponse<ZNSTemplateInfo>

export type ZNSMessageTemplateResponse = ZaloOAResponse<{
  msg_id: string
  sent_time: string
  quota?: {
    dailyQuota: string
    remainingQuota: string
  }
}>
