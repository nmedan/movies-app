import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Movies from './pages/Movies.vue'
import AddMovie from './pages/AddMovie.vue'
import Login from './pages/Login.vue'
Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/movies' },
  { path: '/movies', component: Movies, name: 'movies' },
  { path: '/add', component: AddMovie },
  { path: '/login', component: Login, name: 'login' },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')