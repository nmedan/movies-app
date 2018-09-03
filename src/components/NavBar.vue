<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/movies">Movies App</router-link>
    <router-link class="nav-item nav-link" to="/movies">Movies</router-link>
    <router-link class="nav-item nav-link" to="/add">Add movie</router-link>
    <router-link class="nav-item nav-link" to="/login">Login</router-link>
    <div class="navbar-nav">

    </div>
  </nav>
</template>

<script>
export default {
    components: {
    },
}
</script>