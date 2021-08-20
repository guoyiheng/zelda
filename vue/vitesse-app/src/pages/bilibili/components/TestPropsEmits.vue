<template>
  <div>{{ name }}</div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: 'default name',
  },
})
</script>
