<template>
   <div class="container mt-4">
    <div class="row">
      <div class="col">
         <AppLogin :error="error" @loggedOn="login" />
      </div>
    </div>
  </div>
</template>

<script>

import AppLogin from '../components/AppLogin.vue'
import {authService} from '../services/Auth'

export default {
    components: {
        AppLogin
    },
    
    data() {
       return {
         error:''
       }
    },

    methods: {
        login(userLogin) {
          authService.login(userLogin.email, userLogin.password)
          .then(() => {
            this.$emit('userAuthenticated')
            this.$router.push({ name: 'movies' })
          }).catch(error => {this.error = error.response.data.error})
        }      
    }

}
</script>