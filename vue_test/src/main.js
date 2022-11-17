//引入 Vue
import Vue from 'vue'
//引入 App
import App from './App'
import Vuex from 'vuex'
//关闭 Vue 产生的提示
Vue.config.productionTip = false

Vue.use(Vuex)

//创建 vm
new Vue({
    el: "#app",
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    },
})