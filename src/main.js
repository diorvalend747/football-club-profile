import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import store from './store'

import Home from './pages/Home'
import ClubInfo from './pages/ClubInfo'
import PlayerInfo from './pages/PlayerInfo'

import Club from './components/Club'
import ClubDetail from './components/ClubDetail'
import PlayerDetail from './components/PlayerDetail'

import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

Vue.use(Router)

const routes = [
  { path: '/',
    component: Home,
    children: [
        { path: '/', name: 'Club', component: Club }
    ]
  },
  { path: '/club-info',
    component: ClubInfo,
    children: [
      { path: '/club-info', name: 'ClubDetail', component: ClubDetail }
    ]
  },
  { path: '/player-info',
    component: PlayerInfo,
    children: [
      { path: '/player-info', name: 'PlayerDetail', component: PlayerDetail }
    ]
  }
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