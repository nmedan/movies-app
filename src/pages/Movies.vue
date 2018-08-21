<template>
   <div class="container mt-4">
    <div class="row">
      <div class="col">
        <AppMovies :movies="filteredMovies"/>
        <MovieSearch @searchTermUpdated="setSearchTerm"/>
      </div>
    </div>
  </div>
</template>

<script>

import AppMovies from '../components/AppMovies.vue'
import MovieSearch from '../components/MovieSearch.vue'
import {movies} from '../services/Movies'

export default {
    components: {
        AppMovies,
        MovieSearch
    },

    data() {
        return {
           movies:[],
           term:''
        }
    },

    beforeRouteEnter (to, from, next) {
        movies.getAll()
        .then((response) => {
            next((vm) => {
                vm.movies = response.data
            })
        })
    },

    methods: {
        setSearchTerm(term) {
             return this.term = term
        }
    },

    computed: {
        filteredMovies() {
            console.log(this.movies);
            return this.movies.filter((movie) => {
                return movie.title.indexOf(this.term) !== -1;
            })
        }
    }

}
</script>