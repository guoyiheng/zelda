<template>
  <p class="text-lg font-medium my-4">3. 顶层可以直接使用await</p>
  <div>{{ name }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import delay from '../utils/delay'

const name = ref('await test')
console.log('name', name.value)

// await delay()

name.value = 'ok!!!'
console.log('name', name.value)
</script>
