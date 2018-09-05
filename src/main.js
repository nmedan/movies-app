import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Movies from './pages/Movies.vue'
import AddMovie from './pages/AddMovie.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import MovieDetails from './pages/MovieDetails.vue'
import {authService} from './services/Auth'
Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/movies' },
  { path: '/movies', component: Movies, name: 'movies' },
  { path: '/add', component: AddMovie },
  { path: '/login', component: Login, name: 'login' },
  { path: '/register', component: Register, name: 'register' },
  { path: '/movies/:id', component: MovieDetails, name: 'movie-details' },
]

const router = new VueRouter({
  routes,
  mode: 'history'
  
})

router.beforeEach((to, from, next) => {
    if (!authService.isAuthenticated() && to.name!='login' && to.name!='register') {
        next('/login');
    }
    else if (authService.isAuthenticated() && (to.name == 'login' || to.name == 'register')) {
        next('/movies');
    }
    else {
        next();
    }

});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')