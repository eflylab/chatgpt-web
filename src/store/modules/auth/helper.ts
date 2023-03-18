import { ss } from '@/utils/storage'

const LOCAL_NAME = 'SECRET_TOKEN'
const LOCAL_ADMIN = 'SECRET_TOKEN_ADMIN'

export function getToken() {
  return ss.get(LOCAL_NAME)
}

export function setToken(token: string) {
  return ss.set(LOCAL_NAME, token)
}

export function removeToken() {
  removeAdmin()
  return ss.remove(LOCAL_NAME)
}

export function setAdmin(admin: boolean) {
  return ss.set(LOCAL_ADMIN, admin)
}

export function getAdmin() {
  return ss.get(LOCAL_ADMIN)
}

export function removeAdmin() {
  return ss.remove(LOCAL_ADMIN)
}
