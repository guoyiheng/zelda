```js
// *.vue
import vFocus from '~/plugins/vFocus.js'
;<input v-focus />
// vFocus.js
export default {
  mounted(el) {
    el.focus()
  },
}
```
