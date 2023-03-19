import { deCrypto, enCrypto } from '../crypto'
import type { StorageData } from './storageData'

export function createSessionStorage(options?: { crypto?: boolean }) {
  const { crypto } = Object.assign(
    {
      crypto: true,
    },
    options,
  )

  function set<T = any>(key: string, data: T) {
    const storageData: StorageData<T> = {
      data,
      expire: null,
    }

    const json = crypto ? enCrypto(storageData) : JSON.stringify(storageData)
    window.sessionStorage.setItem(key, json)
  }

  function get<T = any>(key: string): T | null {
    const json = window.sessionStorage.getItem(key)
    if (json) {
      let storageData: StorageData | null = null

      try {
        storageData = crypto ? deCrypto(json) : JSON.parse(json)
      }
      catch {
        // Prevent failure
      }

      if (storageData) {
        const { data, expire } = storageData
        if (expire === null || expire >= Date.now())
          return data as T
      }

      remove(key)
      return null
    }
    return null
  }

  function remove(key: string) {
    window.sessionStorage.removeItem(key)
  }

  function clear() {
    window.sessionStorage.clear()
  }

  return {
    set,
    get,
    remove,
    clear,
  }
}

export const sss = createSessionStorage()
