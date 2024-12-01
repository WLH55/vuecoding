//导入vue
import Vue from 'vue'
//导入app.vur
import App from './App.vue'

import HmButton from "@/components/HmButton";

// 提示：当前处于什么环境 (生产环境 / 开发环境)
Vue.config.productionTip = false

//全局注册 ->在所有的组件范围内都能直接使用
Vue.component('HmButton',HmButton)

new Vue({

  render: (createElement) => {
    return createElement(App)

  }
}).$mount("#app")
