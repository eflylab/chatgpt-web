export function isNumber<T extends number>(value: T | unknown): value is number {
  return Object.prototype.toString.call(value) === '[object Number]'
}

export function isString<T extends string>(value: T | unknown): value is string {
  return Object.prototype.toString.call(value) === '[object String]'
}

export function isNotEmptyString(value: any): boolean {
  return typeof value === 'string' && value.length > 0
}

export function isBoolean<T extends boolean>(value: T | unknown): value is boolean {
  return Object.prototype.toString.call(value) === '[object Boolean]'
}

export function isFunction<T extends (...args: any[]) => any | void | never>(value: T | unknown): value is T {
  return Object.prototype.toString.call(value) === '[object Function]'
}

export function isAuthUser(input: string, AUTH_SECRET_KEY: string): boolean {
  const [username, password] = input.split('@')
  const users: string[] = AUTH_SECRET_KEY.split(',')
  for (const user of users) {
    const [name, pwd] = user.split('@')
    if (name === username && pwd === password)
      return true
  }
  return false
}
