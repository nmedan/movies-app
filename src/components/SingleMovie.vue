<template>
       <div>
         <p>Title: {{movie.title}}</p>
         <p>Director: {{movie.director}} </p>
         <p>Image URL: {{movie.imageUrl}}</p>
         <p>Duration: {{movie.duration}}</p>
         <p>Release date: {{movie.releaseDate}}</p>
         <p>Genre: {{movie.genre}}</p>
		 <p><router-link to="/movies">Back to movies</router-link></p>
       </div>
</template>

<script>

export default {
    props:['movie']
}
</script>