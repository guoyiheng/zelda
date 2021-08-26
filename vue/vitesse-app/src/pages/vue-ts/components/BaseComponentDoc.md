<div style="width:100%">
setup script 方式

```js
<script lang='ts' setup />
```

首先定义一个类型，types.d.ts：

```js
export type Todo = {
  id: number,
  name: string,
  completed: boolean,
}
```

### 数据定义

```js
<script setup lang="ts">
import { defineProps, ref, computed } from "vue";
import type { Todo } from "../types"

const items = ref<Todo[]>([]);
items.value.push({
  id: 1,
  name: "vue3",
  completed: false,
});
</script>
```

</div>

### 属性定义

利用 defineProps()定义属性，常用手法有两种：

```js
// 泛型方式：
defineProps<{ titleInfo: TitleInfo }>()
// 参数方式：
defineProps({ titleInfo: Object as PropType<TitleInfo> })
```

### 计算属性

使用 computed()定义，通常类型可以推断出来。

```js
const counter = ref(0)
const doubleCounter = computed(() => counter.value * 2)
```

### 方法

就是普通函数，定义形参类型和返回值类型即可。

```js
const todoName = ref('')
function newTodo(todoName: string): Todo {
  return {
    id: items.value.length + 1,
    name: todoName,
    completed: false,
  }
}
function addTodo(todo: Todo) {
  items.value.push(todo)
  todoName.value = ''
}
```
