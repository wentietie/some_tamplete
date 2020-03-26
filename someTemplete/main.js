import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 导入全局函数
import globalFunc from './common/globalFunc.js'
Vue.prototype.GF = globalFunc

// 导入分享组件
import shareChild from './common/sharePage'
Vue.component('shareChild', shareChild)

// 导入支付组件
import payChild from './common/payPage'
Vue.component('payChild', payChild)

// 导入弹窗组件
import popWindow from './common/popWindow'
Vue.component('popWindow', popWindow)

const app = new Vue({
    ...App
})
app.$mount()
