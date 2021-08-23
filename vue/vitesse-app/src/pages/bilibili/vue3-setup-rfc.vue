<template>
  <div class="w-full px-11 flex flex-col items-center">
    <Header :title="pageInfo.title" :link="pageInfo.link" :subTitle="pageInfo.subTitle">
      <template #icon>
        <ri-bilibili-line />
      </template>
    </Header>

    <div class="w-8/12 text-left my-4 bg-hex-ecfdf5 bg-opacity-30 p-4">
      <p class="text-lg font-medium my-4">1. 自定义指令</p>
      <test-directive></test-directive>

      <p class="text-lg font-medium my-4">2. props&emits</p>
      <test-props-emits :name="name" @add-prefix="handleAddPrefix" />

      <p class="text-lg font-medium my-4">3. 顶层可以直接使用await</p>
      <test-await></test-await>

      <p class="text-lg font-medium my-4">4. 主动暴露出去数据</p>
      <test-expose ref="fooRef"></test-expose>
      父组件能看到的: {{ fooRef }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TestPropsEmits from './components/TestPropsEmits.vue'
import TestDirective from './components/TestDirective.vue'
import TestAwait from './components/TestAwait.vue'
import TestExpose, { useFoo } from './components/TestExpose.vue'

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
