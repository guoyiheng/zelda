<template>
  <p class="text-4xl">
    <slot name="icon"></slot>
  </p>

  <p>{{ title }}</p>

  <p>
    <em class="text-sm opacity-75">
      <a :href="link" target="_blank"> {{ subTitle }} </a>
    </em>
  </p>
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
