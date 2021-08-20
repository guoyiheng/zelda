<template>
  <pre class="blockquote">
  await delay()
  控制台有打印，视图未显示，疑似bug
  </pre>
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
