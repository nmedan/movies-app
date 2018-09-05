<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/movies">Movies App</router-link>
    <div class="navbar-nav">
        <router-link class="nav-item nav-link" to="/movies">Movies</router-link>
        <router-link class="nav-item nav-link" to="/add">Add movie</router-link>
        <router-link class="nav-item nav-link" v-if="!isAuthenticated" to="/login">Login</router-link>
        <router-link class="nav-item nav-link" v-if="!isAuthenticated" to="/register">Register</router-link>
        <a href="#" class="nav-item nav-link" @click="logout" v-if="isAuthenticated">Logout</a>
    </div>
    <div class="navbar-nav">
    </div>
  </nav>
</template>

<script>

export default {
    props:['isAuthenticated'],
    components: {
    },

    methods: {
      logout() {
         this.$emit('userLoggedOut');
      }
    }
}
</script>