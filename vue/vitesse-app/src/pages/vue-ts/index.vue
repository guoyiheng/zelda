<template>
  <div class="w-full px-11 flex flex-col items-center">
    <!-- 头部信息 -->
    <Header :title="pageInfo.title" :link="pageInfo.link" :subTitle="pageInfo.subTitle">
      <template #icon>
        <file-icons:config-typescript />
      </template>
    </Header>

    <div class="w-8/12 my-4 bg-hex-ecfdf5 bg-opacity-30 p-4">
      <!-- 内容区域 -->
      <base-component />
      <div class="h-4" />
      <base-component-doc />
    </div>
  </div>
</template>

<script setup lang="ts">
// 导入的组件
import BaseComponent from './components/BaseComponent.vue'
import BaseComponentDoc from './components/BaseComponentDoc.md'

// 页面信息
const pageInfo = {
  title: 'vue3 ts 用法',
  link: 'https://www.bilibili.com/video/BV1no4y1k7kJ?p=2',
  subTitle: 'Bilibili 视频',
}
</script>
