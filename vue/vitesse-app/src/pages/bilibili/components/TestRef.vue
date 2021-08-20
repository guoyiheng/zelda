<template>
  <div>
    <p>aaa: {{ aaa }}</p>
    <p>bbb: {{ bbb }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const aaa = 'aaa'
const bbb = ref('bbb')
</script>
