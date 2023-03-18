<script setup lang='ts'>
import { computed, onMounted, ref } from 'vue'
import { NSpin } from 'naive-ui'
import { fetchChatConfig } from '@/api'
import pkg from '@/../package.json'
import { useAuthStore } from '@/store'
import { SvgIcon } from '@/components/common'

interface ConfigState {
  timeoutMs?: number
  reverseProxy?: string
  apiModel?: string
  socksProxy?: string
  httpsProxy?: string
  balance?: string
}

const authStore = useAuthStore()

const loading = ref(false)

const config = ref<ConfigState>()

const isChatGPTAPI = computed<boolean>(() => !!authStore.isChatGPTAPI)

const isAdmin = computed<boolean>(() => !!authStore.isAdmin)

async function fetchConfig() {
  try {
    loading.value = true
    const { data } = await fetchChatConfig<ConfigState>()
    config.value = data
  }
  finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchConfig()
})
</script>

<template>
  <NSpin :show="loading">
    <div class="p-4 space-y-4">
      <h2 class="text-xl font-bold">
        ChatGpt Web - {{ pkg.version }}
      </h2>
      <a
        v-if="isAdmin"
        href="https://github.com/Chanzhaoyu/chatgpt-web"
        target="_blank"
        class="text-[#4b9e5f] relative flex items-center"
      >
        本项目原作者为Chanzhaoyu, 经fork和修改，基于 MIT 协议开源。
        如果你觉得此项目对你有帮助，请在Github支持原作者；如果你希望捐助，请捐助原作者，谢谢你！
        <SvgIcon class="text-lg text-[#4b9e5f] ml-1" icon="carbon:logo-github" />
      </a>
      <div class="p-2 space-y-2 rounded-md bg-neutral-100 dark:bg-neutral-700">
        <p>
          Tips：请勿传播，并在符合国内政策前提下低调使用。
        </p>
      </div>
      <p>{{ $t("setting.api") }}：{{ config?.apiModel ?? '-' }}</p>
      <p v-if="isChatGPTAPI && isAdmin">
        {{ $t("setting.balance") }}：{{ config?.balance ?? '-' }}
      </p>
      <p v-if="!isChatGPTAPI">
        {{ $t("setting.reverseProxy") }}：{{ config?.reverseProxy ?? '-' }}
      </p>
      <p>{{ $t("setting.timeout") }}：{{ config?.timeoutMs ?? '-' }}</p>
      <p>{{ $t("setting.socks") }}：{{ config?.socksProxy ?? '-' }}</p>
      <p>{{ $t("setting.httpsProxy") }}：{{ config?.httpsProxy ?? '-' }}</p>
    </div>
  </NSpin>
</template>
