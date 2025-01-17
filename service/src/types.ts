import type { ChatGPTAPI, ChatGPTUnofficialProxyAPI, FetchFn } from 'chatgpt'

export interface RequestProps {
  prompt: string
  options?: ChatContext
  systemMessage: string
  temperature?: number
  top_p: number
  memory: number
  name: string
  model: string
}

export interface ChatContext {
  conversationId?: string
  parentMessageId?: string
}

export interface ChatGPTUnofficialProxyAPIOptions {
  accessToken: string
  apiReverseProxyUrl?: string
  model?: string
  debug?: boolean
  headers?: Record<string, string>
  fetch?: FetchFn
}

export interface ModelConfig {
  apiModel?: ApiModel
  reverseProxy?: string
  timeoutMs?: number
  socksProxy?: string
  httpsProxy?: string
  usage?: string
}

export interface API {
  apiModel?: ApiModel
  api: ChatGPTAPI | ChatGPTUnofficialProxyAPI
}

export type ApiModel = 'ChatGPTAPI' | 'ChatGPTUnofficialProxyAPI' | undefined
