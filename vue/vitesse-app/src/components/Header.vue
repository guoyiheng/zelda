<template>
  <div class="text-4xl">
    <slot name="icon"></slot>
  </div>

  <div>{{ title }}</div>

  <div>
    <em class="text-sm opacity-75">
      <a :href="link" target="_blank"> {{ subTitle }} </a>
    </em>
  </div>
</template>

<script setup lang="ts">
type Props = {
  title: string
  link: string
  subTitle: string
}
defineProps<Props>()
</script>

<style scoped></style>
