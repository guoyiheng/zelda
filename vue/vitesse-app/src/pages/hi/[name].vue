<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '~/stores/user'

const props = defineProps<{ name: string }>()
const router = useRouter()
const user = useUserStore()

watch(() => props.name, (name) => {
  user.setNewName(name)
}, { immediate: true })

</script>

<template>
  <div>
    <p class="text-4xl">
      <carbon-pedestrian class="inline-block" />
    </p>
    <p>
      你好, {{ props.name }}
    </p>
    <template v-if="user.otherNames.length">
      <p class="text-sm">
        也叫
        <ul>
          <li v-for="name in user.otherNames">
            {{ name }}
          </li>
        </ul>
      </p>
    </template>

    <p class="text-sm opacity-50">
      <em>动态路由演示</em>
    </p>

    <div>
      <button
        class="btn m-3 text-sm mt-8"
        @click="router.back()"
      >
      返回
      </button>
    </div>
  </div>
</template>
