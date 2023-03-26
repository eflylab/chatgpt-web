<script lang="ts" setup>
import { ref } from 'vue'
import { NButton, NInput, NRadioButton, NRadioGroup, NSlider, useMessage } from 'naive-ui'
import { useSettingStore } from '@/store'
import type { SettingsState } from '@/store/modules/settings/helper'
import { t } from '@/locales'

const settingStore = useSettingStore()

const ms = useMessage()

const systemMessage = ref(settingStore.systemMessage ?? '')
// start 记忆与性格
const chatgpt_top_p = ref(settingStore.chatgpt_top_p ?? 0.8)
const chatgpt_memory = ref(settingStore.chatgpt_memory ?? 5)
// end 记忆与性格

function updateSettings(options: Partial<SettingsState>) {
  settingStore.updateSetting(options)
  ms.success(t('common.success'))
}

function handleReset() {
  settingStore.resetSetting()
  ms.success(t('common.success'))
  window.location.reload()
}
</script>

<template>
  <div class="p-4 space-y-5 min-h-[200px]">
    <div class="space-y-6">
      <div class="flex items-center space-x-4">
        <span class="flex-shrink-0 w-[100px]">{{ $t('setting.role') }}</span>
        <div class="flex-1">
          <NInput v-model:value="systemMessage" placeholder="" />
        </div>
        <NButton size="tiny" text type="primary" @click="updateSettings({ systemMessage })">
          {{ $t('common.save') }}
        </NButton>
      </div>
      <!-- 记忆与性能设置 start -->
      <div class="flex flex-wrap items-center gap-4">
        <span class="flex-shrink-0 w-[100px]">{{ $t('setting.chatgpt_memory_title') }}</span>
        <div class="w-[400px]  text-gray-500">
          <NSlider
            v-model:value="chatgpt_memory"
            :marks="{
              5: $t('setting.chatgpt_memory_choice_1'),
              20: $t('setting.chatgpt_memory_choice_2'),
              100: $t('setting.chatgpt_memory_choice_3'),
            }"
            step="mark"
            @update:value="updateSettings({ chatgpt_memory })"
          />
        </div>
      </div>
      <div class="flex flex-wrap items-center gap-4">
        <span class="flex-shrink-0 w-[100px]" />
        <div class="w-[400px]  text-gray-500">
          {{ $t('setting.chatgpt_memory_memo') }}
        </div>
      </div>
      <div class="flex flex-wrap items-center gap-4">
        <span class="flex-shrink-0 w-[100px]">{{ $t('setting.chatgpt_top_p_title') }}</span>
        <div class="w-[400px] text-gray-500">
          <NRadioGroup
            v-model:value="chatgpt_top_p"
            name="radiobuttongroup2"
            size="medium"
            @update:value="updateSettings({ chatgpt_top_p })"
          >
            <NRadioButton
              :key="0.2"
              :value="0.2"
            >
              {{ $t('setting.chatgpt_top_p_choice_1') }}
            </NRadioButton>
            <NRadioButton
              :key="0.8"
              :value="0.8"
            >
              {{ $t('setting.chatgpt_top_p_choice_2') }}
            </NRadioButton>
            <NRadioButton
              :key="1.2"
              :value="1.2"
            >
              {{ $t('setting.chatgpt_top_p_choice_3') }}
            </NRadioButton>
          </NRadioGroup>
        </div>
      </div>
      <div class="flex flex-wrap items-center gap-4">
        <span class="flex-shrink-0 w-[100px]" />
        <div class="w-[400px] text-gray-500">
          <span v-if="0.2 === chatgpt_top_p">
            {{ $t('setting.chatgpt_top_p_1_memo') }}
          </span>
          <span v-else-if="0.8 === chatgpt_top_p">
            {{ $t('setting.chatgpt_top_p_2_memo') }}
          </span>
          <span v-else>
            {{ $t('setting.chatgpt_top_p_3_memo') }}
          </span>
        </div>
      </div>
      <!-- 记忆与性能设置 end -->
      <div class="flex items-center space-x-4">
        <span class="flex-shrink-0 w-[100px]">&nbsp;</span>
        <NButton size="small" @click="handleReset">
          {{ $t('common.reset') }}
        </NButton>
      </div>
    </div>
  </div>
</template>
