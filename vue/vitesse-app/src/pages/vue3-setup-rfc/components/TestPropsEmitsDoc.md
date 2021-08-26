```js
// 第一种定义props的方法
// const props = defineProps({
//   name: {
//     type: String,
//   },
// })
type Props = {
  name: String
  size?: number
}
const props = withDefaults(defineProps<Props>(), {
  size: 100,
})
// 定义emit
const emit = defineEmits(['add-prefix'])
// 使用emit
const addPrefix = () => {
  emit('add-prefix')
}
```
