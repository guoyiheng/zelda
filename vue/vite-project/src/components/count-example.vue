<template>
  <div>
    <button @click="handleClick">{{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const handleClick = () => {
  count.value++
}
</script>

<style scoped></style>
