<template>
   <div class="container mt-4">
    <div class="row">
      <div class="col">
         <MovieForm @movieAdded="addMovie" :errors="errors"/>
      </div>
    </div>
  </div>
</template>

<script>

import MovieForm from '../components/MovieForm.vue'
import {movies} from '../services/Movies'

export default {
    components: {
        MovieForm
    },

	data() {
	    return {
		    errors:[]
		}
	},

    methods: {
        addMovie(movie) {
             movies.add(movie).then(response=>{this.$router.push
            ('/movies')}).catch(error => {this.errors = error.response.data.errors})
        }      
    }

}
</script>