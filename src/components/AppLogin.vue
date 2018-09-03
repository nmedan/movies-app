<template>
  <div>
   <form @submit.prevent="onSubmit()">
      <div class="form-group row">
        <label for="email" class="col-4 col-form-label">Email</label>
        <div class="col-8">
          <div class="input-group">
            <input type="text" class="form-control here" v-model="userLogin.email">
          </div>
        </div>
		
      </div>
      <div class="form-group row">
        <label for="password" class="col-4 col-form-label">Password</label>
        <div class="col-8">
          <div class="input-group">
            <input type="password" class="form-control here" v-model="userLogin.password">
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
    data() {
      return {
         userLogin:{
           email:'',
           password:''
         }
      }
    },
    methods: {              
       onSubmit()  {
            this.$emit('loggedOn', this.userLogin)
		}
    }

     
}
</script>