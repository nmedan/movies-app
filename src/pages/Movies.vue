<template>
   <div class="container mt-4">
    <div class="row">
      <div class="col">
         <MovieSearch @searchTermUpdated="setSearchTerm" />
        <AppMovies :movies="filteredMovies" @sortedByName="sortByName" @sortedByNameDesc="sortByNameDesc"
                   @sortedByDuration="sortByDuration" @sortedByDurationDesc="sortByDurationDesc"/>       
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
                for (let i = 0; i<vm.movies.length; i++){
                     vm.movies[i].duration = Math.floor(Math.random()*(240-60)+60)                               
                }
            })
        })
        
    },

    methods: {
        setSearchTerm(term) {
             return this.term = term
        },
        
        sortByName() {
            return this.movies.sort(function(a, b) {
                 console.log('sorted');
                 return a.title<b.title? -1 : a.title>b.title? 1 : 0;
            });
        },
        
        sortByNameDesc() {
             return this.movies.sort(function(a, b) {
                 console.log('sorted desc');
                 return a.title<b.title? 1 : a.title>b.title? -1 : 0;
            });
        },
        
        sortByDuration() {
            return this.movies.sort(function(a, b) {
                 return a.duration-b.duration;
            });
        },
        
         sortByDurationDesc() {
            return this.movies.sort(function(a, b) {
                 return b.duration-a.duration;
            });
        }
       
    },

    computed: {
        filteredMovies() {
            return this.movies.filter((movie) => {
                return movie.title.indexOf(this.term) !== -1;
            })
        }
    }

}
</script>