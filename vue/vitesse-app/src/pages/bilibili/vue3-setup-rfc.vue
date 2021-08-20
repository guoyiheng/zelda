<template>
  <input
    id="input"
    v-model="pluginFocusTest"
    placeholder="自定义指令-自动聚焦"
    type="text"
    p="x-4 y-2"
    w="250px"
    bg="transparent"
    border="~ rounded gray-200 dark:gray-700"
    outline="none active:none"
    v-focus
  />
  <test-props-emits :name="pluginFocusTest" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import vFocus from '~/plugins/vFocus.js'
import TestPropsEmits from './components/TestPropsEmits.vue'
const pluginFocusTest = ref('')
</script>

<style scoped></style>
