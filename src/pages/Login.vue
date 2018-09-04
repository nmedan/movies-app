<template>
   <div class="container mt-4">
    <div class="row">
      <div class="col">
         <AppLogin @loggedOn="login" />
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

    methods: {
        login(userLogin) {
          authService.login(userLogin.email, userLogin.password)
          .then(() => {
            this.$emit('userAuthenticated')
            this.$router.push({ name: 'movies' })
          })
        }      
    }

}
</script>