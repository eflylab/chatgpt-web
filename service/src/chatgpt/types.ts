import type { ChatMessage } from 'chatgpt'

export interface RequestOptions {
  message: string
  top_p: number
  memory: number
  name: string
  lastContext?: { conversationId?: string; parentMessageId?: string }
  process?: (chat: ChatMessage) => void
  systemMessage?: string
}
