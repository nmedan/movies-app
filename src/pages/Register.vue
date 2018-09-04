<template>
   <div class="container mt-4">
    <div class="row">
      <div class="col">
         <AppRegister @userRegistered="register" :errors="errors"/>
      </div>
    </div>
  </div>
</template>

<script>

import AppRegister from '../components/AppRegister.vue'
import {authService} from '../services/Auth'

export default {
    components: {
        AppRegister
    },

	data() {
	     return {
		     errors:[]
		 }
	},

    methods: {
        register(user) {
          authService.register(user)
          .then(response=> {
            this.$router.push({ name: 'login' })
          }).catch(error => {this.errors = error.response.data.errors})
        }      
    }

}
</script>