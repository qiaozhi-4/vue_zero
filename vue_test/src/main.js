//引入 Vue
import Vue from 'vue'
//引入 App
import App from './App'
//关闭 Vue 产生的提示
Vue.config.productionTip = false

//创建 vm
new Vue({
    el: "#app",
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    },
})