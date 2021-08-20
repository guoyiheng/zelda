<script setup lang="ts">
import { isDark, toggleDark } from '~/logic'
</script>

<template>
  <nav class="text-xl mt-6">
    <router-link class="icon-btn mx-2" to="/bilibili/vue3-setup-rfc" title="setup语法糖">
      <ri-bilibili-line />
    </router-link>
  </nav>
  <nav class="text-xl mt-1">
    <router-link class="icon-btn mx-2" to="/" title="首页">
      <carbon-campsite />
    </router-link>

    <button class="icon-btn mx-2 !outline-none" title="切换深色模式" @click="toggleDark">
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </button>

    <a
      class="icon-btn mx-2"
      rel="noreferrer"
      href="https://github.com/antfu/vitesse"
      target="_blank"
      title="GitHub"
    >
      <carbon-logo-github />
    </a>
  </nav>
</template>
