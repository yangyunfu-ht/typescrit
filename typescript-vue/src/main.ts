import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/index.scss'
import 'ant-design-vue/dist/antd.css'

import { Row, Col, Drawer, Tabs, Icon, Input } from 'ant-design-vue'
Vue.use(Row).use(Col).use(Drawer).use(Tabs).use(Icon).use(Input)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
