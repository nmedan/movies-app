<template>
  <div>
   <form @submit.prevent="onSubmit()">
      <div class="form-group row">
        <label for="name" class="col-4 col-form-label">Name</label>
        <div class="col-8">
          <div class="input-group">
            <input type="text" class="form-control here" v-model="user.name">
          </div>
		   <p class="alert alert-danger" role="alert" v-if="errors.name">{{errors.name[0]}}</p>
        </div>		
      </div>
      <div class="form-group row">
        <label for="email" class="col-4 col-form-label">Email</label>
        <div class="col-8">
          <div class="input-group">
            <input type="text" class="form-control here" v-model="user.email">
          </div>
		   <p class="alert alert-danger" role="alert" v-if="errors.email">{{errors.email[0]}}</p>
        </div>		
      </div>
      <div class="form-group row">
        <label for="password" class="col-4 col-form-label">Password</label>
        <div class="col-8">
          <div class="input-group">
            <input type="password" id="password" name="password" class="form-control here" v-model="user.password">
          </div>
		   <p class="alert alert-danger" role="alert" v-if="errors.password">{{errors.password[0]}}</p>
        </div>		
      </div>
	  <div class="form-group row">
        <label for="password_confirmation" class="col-4 col-form-label">Confirm password</label>
        <div class="col-8">
          <div class="input-group">
            <input type="password" id="password_confirmation" name="password_confirmation" v-model="user.password_confirmation" class="form-control here">
          </div>
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
         user:{
		   name:'',
           email:'',
           password:'',
		   password_confirmation:''
         }
      }
    },
    methods: {              
       onSubmit()  {
            this.$emit('userRegistered', this.user)
		}
    }

     
}
</script>