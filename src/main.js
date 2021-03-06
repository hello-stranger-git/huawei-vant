import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import '@/assets/css/reset.css'
// 引入全局矢量图
import '@/assets/iconfont/iconfont.css'
// 引入echarts挂载全局
import * as echarts from 'echarts'

export default new Vue()
Vue.use(Vant)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
