<template>
  <p class="text-lg font-medium my-4">2. props&emits</p>
  <p class="mt-3">name: {{ name }} 。size: {{ size }}</p>
  <button @click="addPrefix" class="mt-3 text-sm btn" :disabled="!name">emits: 添加前缀</button>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'
// 第一种定义props的方法
// const props = defineProps({
//   name: {
//     type: String,
//   },
// })
// 第二种定义props的方法
type Props = {
  name: String
  size?: number
}
withDefaults(defineProps<Props>(), {
  size: 100,
})
const emit = defineEmits(['add-prefix'])
const addPrefix = () => {
  emit('add-prefix')
}
</script>
