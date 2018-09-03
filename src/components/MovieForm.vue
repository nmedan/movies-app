<template>
  <div>
   <form @submit.prevent="onSubmit()">
      <div class="form-group row">
        <label for="title" class="col-4 col-form-label">Title</label>
        <div class="col-8">
          <div class="input-group">
            <input type="text" class="form-control here" v-model="movie.title">
          </div>
		  <p class="alert alert-danger" role="alert" v-if="errors.title">{{errors.title[0]}}</p>
        </div>
		
      </div>
      <div class="form-group row">
        <label for="director" class="col-4 col-form-label">Director</label>
        <div class="col-8">
          <div class="input-group">
            <input type="text" class="form-control here" v-model="movie.director">
          </div>
		  <p class="alert alert-danger" role="alert" v-if="errors.director">{{errors.director[0]}}</p>
        </div>
		
      </div>
      <div class="form-group row">
        <label for="imageUrl" class="col-4 col-form-label">Image URL</label>
        <div class="col-8">
           <div class="input-group">
            <input type="text" class="form-control here" v-model="movie.imageUrl">
          </div>
		  <p class="alert alert-danger" role="alert" v-if="errors.imageUrl">{{errors.imageUrl[0]}}</p>
        </div>
		
      </div>
      <div class="form-group row">
        <label for="duration" class="col-4 col-form-label">Duration</label>
        <div class="col-8">
          <div class="input-group">
            <input type="number" class="form-control here" v-model="movie.duration">
          </div>
		  <p class="alert alert-danger" role="alert" v-if="errors.duration">{{errors.duration[0]}}</p>
        </div>
		
      </div>
      <div class="form-group row">
        <label for="releaseDate" class="col-4 col-form-label">Release date</label>
        <div class="col-8">
          <div class="input-group">
            <input type="text" class="form-control here" v-model="movie.releaseDate">
          </div>
		  <p class="alert alert-danger" role="alert" v-if="errors.releaseDate">{{errors.releaseDate[0]}}</p>
        </div>
		
      </div>
      <div class="form-group row">
        <label for="genre" class="col-4 col-form-label">Genre</label>
        <div class="col-8">
          <div class="input-group">
            <input type="text" class="form-control here" v-model="movie.genre">
          </div>
		  <p class="alert alert-danger" role="alert" v-if="errors.genre">{{errors.genre[0]}}</p>
        </div>
		
      </div>
      <div class="form-group row">
        <div>
          <button name="submit" type="submit" class="btn btn-success">Submit</button>
        </div>
      </div>
    </form>
    </div>
</template>

<script>
export default {
    props:['errors'],
    data() {
      return {
         movie:{
         title:'',
         director:'',
         imageUrl:'',
         duration:'',
         releaseDate:'',
         genre:''
         }
      }
    },
    methods: {              
       onSubmit()  {
            this.$emit('movieAdded', this.movie)
		}
    }

     
}
</script>