<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '~/stores/user'

const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name.value) router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <p class="text-4xl">
      <carbon-campsite class="inline-block" />
    </p>
    <p>Vitesse</p>
    <p>
      <em class="text-sm opacity-75">固执己见的 Vite 项目模板</em>
    </p>

    <div class="py-4" />

    <input
      id="input"
      v-model="name"
      placeholder="输入你的名字"
      aria-label="输入你的名字"
      type="text"
      autocomplete="false"
      @keydown.enter="go"
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
    />
    <label class="hidden" for="input">输入你的名字</label>

    <div>
      <button class="m-3 text-sm btn" :disabled="!name" @click="go">确定</button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
