<template>
  <div class="w-full px-11 flex flex-col items-center">
    <Header :title="pageInfo.title" :link="pageInfo.link" :subTitle="pageInfo.subTitle">
      <template #icon>
        <ri-bilibili-line />
      </template>
    </Header>

    <div class="w-8/12 my-4 bg-hex-ecfdf5 bg-opacity-30 p-4">
      <test-directive />
      <div class="h-4" />
      <test-directive-doc />

      <test-props-emits :name="name" @add-prefix="handleAddPrefix" />
      <div class="h-4" />
      <test-props-emits-doc />

      <test-await />
      <div class="h-4" />
      <test-await-doc />

      <test-expose ref="fooRef" />
      <div class="h-4" />
      <test-expose-doc />
      父组件能看到的: {{ fooRef }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TestDirective from './components/TestDirective.vue'
import TestDirectiveDoc from './components/TestDirectiveDoc.md'
import TestPropsEmits from './components/TestPropsEmits.vue'
import TestPropsEmitsDoc from './components/TestPropsEmitsDoc.md'
import TestAwait from './components/TestAwait.vue'
import TestAwaitDoc from './components/TestAwaitDoc.md'
import TestExpose, { useFoo } from './components/TestExpose.vue'
import TestExposeDoc from './components/TestExposeDoc.md'

const pageInfo = {
  title: 'vue3 setup 语法糖',
  link: 'https://www.bilibili.com/video/BV1Rb4y1C7p3',
  subTitle: 'Bilibili 视频',
}

// props&emits
const name = ref('测试props')
const handleAddPrefix = () => {
  name.value = 'ohhh!!!' + name.value
}
// 获取实例对象
const fooRef = ref(null)

onMounted(() => {
  console.log('通过 defineExpose 暴露出去的值 ', fooRef.value)
  console.log('设置组件默认导出的内容default', TestExpose)
  useFoo()
})
</script>
