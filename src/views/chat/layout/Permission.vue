<script setup lang='ts'>
import { computed, ref } from 'vue'
import { NButton, NInput, NModal, useMessage } from 'naive-ui'
import { fetchVerify } from '@/api'
import { useAuthStore, useUserStore } from '@/store'
import Icon403 from '@/icons/403.vue'

interface Props {
  visible: boolean
}

interface VerifyResult {
  isAdmin: boolean
}

defineProps<Props>()

const authStore = useAuthStore()

const ms = useMessage()

const loading = ref(false)
const token = ref('')
const username = ref('')

const disabled = computed(() => !token.value.trim() || loading.value)

const userStore = useUserStore()

async function handleVerify() {
  const secretKey = token.value.trim()
  const id = username.value.trim()
  if (!secretKey || !id)
    return

  const hash = `${id}@${secretKey}`

  try {
    loading.value = true
    const data = await fetchVerify<VerifyResult>(hash)
    authStore.setToken(hash)
    authStore.setAdmin(data.data.isAdmin)
    ms.success('success')
    userStore.userInfo.name = id
    userStore.updateUserInfo(userStore.userInfo)

    window.location.reload()
  }
  catch (error: any) {
    ms.error(error.message ?? 'error')
    authStore.removeToken()
    token.value = ''
  }
  finally {
    loading.value = false
  }
}

function handlePress(event: KeyboardEvent) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault()
    handleVerify()
  }
}
</script>

<template>
  <NModal :show="visible" style="width: 90%; max-width: 640px">
    <div class="p-10 bg-white rounded dark:bg-slate-800">
      <div class="space-y-4">
        <header class="space-y-2">
          <h2 class="text-2xl font-bold text-center text-slate-800 dark:text-neutral-200">
            403
          </h2>
          <p class="text-base text-center text-slate-500 dark:text-slate-500">
            {{ $t('common.unauthorizedTips') }}
          </p>
          <Icon403 class="w-[200px] m-auto" />
        </header>
        <NInput v-model:value="username" type="text" placeholder="请输入用户名" @keypress="handlePress" />
        <NInput v-model:value="token" type="password" placeholder="请输入密码" @keypress="handlePress" />
        <NButton
          block
          type="primary"
          :disabled="disabled"
          :loading="loading"
          @click="handleVerify"
        >
          {{ $t('common.verify') }}
        </NButton>
      </div>
    </div>
  </NModal>
</template>
