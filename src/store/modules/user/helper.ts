import { getToken } from '../auth/helper'
import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  const id = (getToken() || '').split('@')[0] || 'ChatGPT Web'
  return {
    userInfo: {
      avatar: 'https://source.unsplash.com/128x128/?cat',
      name: id,
      description: '低调使用，请勿传播',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
