<template>
   <div class="container mt-4">
    <div class="row">
      <div class="col">
         <MovieSearch @searchTermUpdated="setSearchTerm" />
        <AppMovies :movies="paginatedMovies" :allMovies="movies" @sortedByName="sortByName" @sortedByNameDesc="sortByNameDesc"
                   @sortedByDuration="sortByDuration" @sortedByDurationDesc="sortByDurationDesc"/>
        <Paginate :pageNumber ="pageNumber" :pagesLength="pagesLengthNumber" :movies="filteredMovies" @setNextPage="goToNextPage" @setPreviousPage="goToPreviousPage"/>
      </div>
    </div>
  </div>
</template>

<script>

import AppMovies from '../components/AppMovies.vue'
import MovieSearch from '../components/MovieSearch.vue'
import Paginate from '../components/Paginate.vue'
import {movies} from '../services/Movies'
import {authService} from '../services/Auth'

export default {
    components: {
        AppMovies,
        MovieSearch,
        Paginate
    },

    data() {
        return { 
           movies:[],
           term:'',
           pageNumber:1,
           pagesLength:1,
           isAuthenticated:authService.isAuthenticated()
        }
    },

    beforeRouteEnter (to, from, next) {
        movies.getAll()
        .then((response) => {
            if (from.isAuthenticated) {
               next((vm) => {
                   vm.movies = response.data            
               })
            }
            else {
               next('/login')            
            }
        })
        
    },

    methods: {
        setSearchTerm(term) {
             this.pageNumber = 1;  
             return this.term = term
        },
        
        sortByName() {
            return this.movies.sort(function(a, b) {
                 return a.title<b.title? -1 : a.title>b.title? 1 : 0;
            });
        },
        
        sortByNameDesc() {
             return this.movies.sort(function(a, b) {
                 return a.title>b.title? -1 : a.title<b.title? 1 : 0;
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
        },
        
        goToNextPage() {
            if(this.pageNumber<=this.pagesLengthNumber) {
              this.pageNumber++;
            }
        },
        
        goToPreviousPage() {
           if (this.pageNumber>1) {
           console.log('previous');
            this.pageNumber--;
           }
        }
       
    },

    computed: {
        filteredMovies() {
             return this.movies.filter((movie) => {
                return movie.title.indexOf(this.term) !== -1;
            })        
        },
        
        paginatedMovies() {
            return this.filteredMovies.filter((movie) => {
                return Math.floor(this.filteredMovies.indexOf(movie)/5) === this.pageNumber-1;
            })
        },
        
        pagesLengthNumber() {
            return Math.floor((this.filteredMovies.length-1)/5) + 1;
        }
    }

}
</script>