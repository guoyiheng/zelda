<template>
  <pre class="blockquote">
  defineExpose({
    aaa,
  })
  </pre>
</template>

<script setup lang="ts">
import { ref, defineExpose } from 'vue'
const aaa = 'aaa'
const bbb = ref('bbb')
defineExpose({
  aaa,
  bbb,
})
</script>
