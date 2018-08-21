<template>
    <div class="list-group">
       <div v-for="(movie, key) in movies" :key="key">
         <p>Title: {{movie.title}}</p>
         <p>Director: {{movie.director}} </p>
         <p>Image URL: {{movie.ImageUrl}}</p>
         <p>Release date: {{movie.releaseDate}}</p>
         <p>Genre: {{movie.genre}}</p>
         <hr/>
       </div>
    </div>
</template>

<script>

export default {
    props:['movies']
}
</script>