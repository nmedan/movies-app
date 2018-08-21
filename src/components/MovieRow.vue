<template>
       <div v-bind:style="filmSelected? styleBackground : ''">
         <p>Title: {{movie.title}}</p>
         <p>Director: {{movie.director}} </p>
         <p>Image URL: {{movie.ImageUrl}}</p>
         <p>Release date: {{movie.releaseDate}}</p>
         <p>Genre: {{movie.genre}}</p>
         <button class="btn btn-primary" type="button" @click="selectFilm">Select</button>
         <hr/>
       </div>
</template>

<script>

export default {
    props:['movie'],
    data () {
        return  {
            filmSelected:false,
            styleBackground: {
                background:'lightblue'
            }
        }
    },
    methods: {
        selectFilm() {
            if (!this.filmSelected) {
              this.filmSelected = true;
              this.$emit('selectedFilm');
            }
        }
    }
}
</script>