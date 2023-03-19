import { sss } from '@/utils/storage'

const LOCAL_NAME = 'SECRET_TOKEN'
const LOCAL_ADMIN = 'SECRET_TOKEN_ADMIN'

export function getToken() {
  return sss.get(LOCAL_NAME)
}

export function setToken(token: string) {
  return sss.set(LOCAL_NAME, token)
}

export function removeToken() {
  removeAdmin()
  return sss.remove(LOCAL_NAME)
}

export function setAdmin(admin: boolean) {
  return sss.set(LOCAL_ADMIN, admin)
}

export function getAdmin() {
  return sss.get(LOCAL_ADMIN)
}

export function removeAdmin() {
  return sss.remove(LOCAL_ADMIN)
}
