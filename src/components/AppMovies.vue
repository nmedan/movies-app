<template >
    <div v-if="movies.length>0">
       <div>
       <ul style="list-style:none">
          <li v-for="(movie, key) in movies" :key="key">
             <MovieRow :movie="movie" :selectedFilms="selectedFilms" @selectedFilm="addSelectedFilm"></MovieRow>
           </li>
       </ul>
       </div>
      <div>
         Selected films: <label >{{selectedFilms.length}}</label>
       </div>
      <div>
         <button type="button" class="btn btn-success" @click="selectAll">Select all</button>
         <button type="button" class="btn btn-danger" @click="deselectAll">Deselect all</button>
      </div>
      <div>
        <button type="button"  class="btn btn-primary" @click="sortByName">Sort by name</button>
        <button type="button" class="btn btn-primary" @click="sortByNameDesc">Sort by name desc</button>
        <button type="button"  class="btn btn-primary" @click="sortByDuration">Sort by duration</button>
        <button type="button" class="btn btn-primary" @click="sortByDurationDesc">Sort by duration desc</button>
      </div>
    </div>
    <div v-else>
       <h2>No movies found</h2>
    </div>
</template>


<script>

import MovieRow from '../components/MovieRow.vue'
export default {
    props:['movies', 'allMovies'],
    components: {
        MovieRow
    },
    data() {
        return {
            selectedFilms:[],
        }
    },
    methods: {
        addSelectedFilm(id) {
            let film = this.movies.find(film=>film.id === id);
            if (this.selectedFilms.indexOf(film) === -1) {
              
                this.selectedFilms.push(film);
              
            }            
            else {
                 let indexOfFilmToUnselect = this.selectedFilms.indexOf(film);
                 this.selectedFilms.splice(indexOfFilmToUnselect, 1);
            }
        },
        
        selectAll() {
             this.selectedFilms = [];
             for (let i = 0; i<this.allMovies.length; i++) {
                 this.selectedFilms.push(this.movies[i]);
             }
        },
        
        deselectAll() {
             this.selectedFilms = [];
        },
        
        sortByName() {
            this.$emit('sortedByName');
        },
        
        sortByNameDesc() {
             this.$emit('sortedByNameDesc');
        },
                                                   
        sortByDuration() {
             this.$emit('sortedByDuration');                                   
        },
        
        sortByDurationDesc() {
             this.$emit('sortedByDurationDesc');                                      
        }       
    }
}
</script>