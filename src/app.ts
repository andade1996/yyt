import { createApp } from 'vue'
import { Button, Toast, Tabs, TabPane, NoticeBar, Input } from '@nutui/nutui-taro';
import { createPinia } from 'pinia'
import './app.scss'

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(Button)
    .use(Toast)
    .use(createPinia())
    .use(Tabs)
    .use(TabPane)
    .use(NoticeBar)
    .use(Input)

export default App
