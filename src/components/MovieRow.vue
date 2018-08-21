<template>
       <div>
         <p>Title: {{movie.title}}</p>
         <p>Director: {{movie.director}} </p>
         <p>Image URL: {{movie.ImageUrl}}</p>
         <p>Release date: {{movie.releaseDate}}</p>
         <p>Genre: {{movie.genre}}</p>
         <hr/>
       </div>
</template>

<script>

export default {
    props:['movie']
}
</script>