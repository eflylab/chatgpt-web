import { ss } from '@/utils/storage'
import { contextModel } from '@/store/modules/settings/helper'

const default_model = contextModel[0].value

const LOCAL_NAME = 'chatStorage'

export function defaultState(): Chat.ChatState {
  const uuid = 1002
  return {
    active: uuid,
    usingContext: true,
    history: [{ uuid, model: default_model, title: 'New Chat', isEdit: false }],
    chat: [{ uuid, model: default_model, data: [] }],
  }
}

export function getLocalState(): Chat.ChatState {
  const localState = ss.get(LOCAL_NAME)
  return { ...defaultState(), ...localState }
}

export function setLocalState(state: Chat.ChatState) {
  ss.set(LOCAL_NAME, state)
}
