<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/movies">Movies</router-link>
    <div class="navbar-nav">
    </div>
  </nav>
</template>

<script>
import MovieSearch from '../components/MovieSearch.vue'
export default {
    components: {
        MovieSearch
    }
}
</script>