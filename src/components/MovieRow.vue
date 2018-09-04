<template>
       <div v-bind:style="isSelected(movie)? styleBackground : ''">
         <p>Title: {{movie.title}}</p>
         <p>Director: {{movie.director}} </p>
         <p>Image URL: {{movie.imageUrl}}</p>
         <p>Duration: {{movie.duration}}</p>
         <p>Release date: {{movie.releaseDate}}</p>
         <p>Genre: {{movie.genre}}</p>
         <button class="btn btn-primary" type="button" @click="selectFilm">Select</button>
         <router-link :to="{ name: 'movie-details', params: { id: movie.id }}">Details</router-link>
         <hr/>
       </div>
</template>

<script>

export default {
    props:['movie', 'selectedFilms'],
    data () {
        return  {
            styleBackground: {
                background:'lightblue'
            }
        }
    },
    methods: {
        selectFilm() {
            this.$emit('selectedFilm', this.movie.id);
        },
        
        isSelected(film) {
            return this.selectedFilms.indexOf(film) !== -1;
        }
        
    }
}
</script>