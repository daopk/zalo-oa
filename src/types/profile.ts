export interface UserProfile {
  avatar: string
  avatars: {
    '120': string
    '240': string
  }
  user_gender: number
  user_id: string
  user_id_by_app: string
  display_name: string
  tags_and_notes_info: {
    notes: string[]
    tag_names: string[]
  }
}
