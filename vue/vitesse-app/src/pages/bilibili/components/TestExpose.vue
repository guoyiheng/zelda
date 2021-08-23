<template>
  <pre class="blockquote">
  defineExpose({
    aaa,
  })
  </pre>
</template>

<script lang="ts">
export default {
  name: 'Foo-C',
}
export function useFoo() {
  console.log('使用{}导入进来的函数 foo')
}
</script>
<script setup lang="ts">
import { ref, defineExpose } from 'vue'
const aaa = 'aaa'
const bbb = ref('bbb')
defineExpose({
  aaa,
  bbb,
})
</script>
