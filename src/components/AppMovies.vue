<template >
    <div v-if="movies.length>0" class="list-group">
       <ul style="list-style:none">
          <li v-for="(movie, key) in movies" :key="key">
             <MovieRow :movie="movie"></MovieRow>
           </li>
       </ul>
    </div>
    <div v-else>
       <h2>No movies found</h2>
    </div>
</template>


<script>

import MovieRow from '../components/MovieRow.vue'
export default {
    props:['movies'],
    components: {
        MovieRow
    }
}
</script>