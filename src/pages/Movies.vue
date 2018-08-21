<template>
   <div class="container mt-4">
    <div class="row">
      <div class="col">
        <AppMovies :movies="movies"/>
      </div>
    </div>
  </div>
</template>

<script>

import AppMovies from '../components/AppMovies.vue'
import {movies} from '../services/Movies'

export default {
    components: {
        AppMovies
    },

    data() {
        return {
           movies:[]
        }
    },

    beforeRouteEnter (to, from, next) {
        movies.getAll()
        .then((response) => {
            next((vm) => {
                vm.movies = response.data
            })
        })
    }

}
</script>