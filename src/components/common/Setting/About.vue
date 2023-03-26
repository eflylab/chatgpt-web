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
        href="https://github.com/eflylab/chatgpt-web"
        target="_blank"
        class="text-[#4b9e5f] relative flex items-center"
      >
        View Source Code
        <SvgIcon class="text-lg text-[#4b9e5f] ml-1" icon="carbon:logo-github" />
      </a>
      <div class="p-2 space-y-2 rounded-md bg-neutral-100 dark:bg-neutral-700">
        <p v-text="$t(&quot;setting.about_head&quot;)" />
        <p v-text="$t(&quot;setting.about_body&quot;)" />
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
