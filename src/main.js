import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import store from './store'

import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

Vue.use(Router)

const routes = [
    
]
  
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
  
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')