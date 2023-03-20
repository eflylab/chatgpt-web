import fs from 'fs'
import path from 'path'

const getLocalTime = () => {
  const date = new Date()
  const localTime = date.getTime()
  const localOffset = date.getTimezoneOffset() * 60000
  const utc = localTime + localOffset
  const offset = 8
  const localDate = new Date(utc + 3600000 * offset)
  const dateString = `${localDate.getFullYear().toString()}-${(localDate.getMonth() + 1).toString().padStart(2, '0')}-${localDate.getDate().toString().padStart(2, '0')}`
  const timeString = `${localDate.getHours().toString().padStart(2, '0')}:${localDate.getMinutes().toString().padStart(2, '0')}:${localDate.getSeconds().toString().padStart(2, '0')}`
  return `${dateString} ${timeString}`
}

const isEnableLogging = () => {
  return process.env.LOGDIR !== undefined
}

const loggerDir = () => {
  const logDir = path.resolve(process.env.LOGDIR || '../../log')
  return logDir
}

export const initLogger = () => {
  if (!isEnableLogging())
    return

  if (!fs.existsSync(loggerDir()))
    fs.mkdirSync(loggerDir())
}

export const logger = (user: string, message: string) => {
  if (!isEnableLogging())
    return
  initLogger()

  const date = new Date()
  const dateString = date.getFullYear().toString() + (date.getMonth() + 1).toString().padStart(2, '0') + date.getDate().toString().padStart(2, '0')

  const fileName = `${dateString}_${user}.log`
  const logPath = path.join(loggerDir(), fileName)
  const logMessage = `${getLocalTime()} : ${message}\n`
  fs.appendFileSync(logPath, logMessage)
}
