<template>
   <div class="container mt-4">
    <div class="row">
      <div class="col">
         <SingleMovie :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>

import SingleMovie from '../components/SingleMovie.vue'
import {movies} from '../services/Movies'

export default {
    components: {
        SingleMovie
    },

    data() {
        return { 
           movie:''
        }
    },

    beforeRouteEnter (to, from, next) {
        movies.get(to.params.id)
        .then((response) => {
            next((vm) => {
                vm.movie = response.data                
            })
        })
        
    }


}
</script>