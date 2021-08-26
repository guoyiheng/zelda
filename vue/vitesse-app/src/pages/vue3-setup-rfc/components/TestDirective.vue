<template>
  <p class="text-lg font-medium my-4">1. 自定义指令</p>
  <input
    id="input"
    v-model="name"
    placeholder="自定义指令-自动聚焦"
    type="text"
    p="x-4 y-2"
    w="240px"
    bg="transparent"
    border="~ rounded gray-200 dark:gray-700"
    outline="none active:none"
    v-focus
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import vFocus from '~/plugins/vFocus'

// 自定义指令
const name = ref('')
</script>

<style scoped></style>
