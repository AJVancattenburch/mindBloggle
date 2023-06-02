<template>

  <form class="account-form card elevation-1" @submit.prevent="handleSubmit">

    <div class="card-body">
      <div class="form-floating mb-3">
        <input name="name" class="form-control" placeholder="Name" type="text" required v-model="editable.name">
        <label for="name">Name:</label>
      </div>
      <div class="form-floating mb-3">
        <input name="picture" class="form-control" placeholder="Profile Picture" type="url" required
          v-model="editable.picture">
        <label for="picture">Picture:</label>
      </div>
      <div class="form-floating mb-3">
        <input name="cover-img" class="form-control" placeholder="cover Image" type="url" required
          v-model="editable.coverImg">
        <label for="cover-img">Cover Image:</label>
      </div>
      <div class="form-floating mb-3">
        <textarea name="bio" class="form-control" placeholder="Edit Bio..." type="text" required v-model="editable.bio"></textarea>
        <label for="bio">About Me:</label>
      </div>
      <div class="form-floating mb-3">
        <input name="github" class="form-control" placeholder="Enter Link..." type="url"  v-model="editable.github">
        <label for="github">Github:</label>
      </div>
    </div>
    <div class="card-footer text-end">
      <button class="btn btn-success" type="submit">Save Account</button>
    </div>


  </form>

</template>

<script>

import { ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { router } from "../router.js";
import { accountService } from "../services/AccountService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";




  export default {
    setup() {
      const editable = ref({})

      watchEffect(() => {
        // if ( !AppState.account ) {
        //   return
        // }
        editable.value = { ...AppState.account }
      })

      return {
        editable,
        async handleSubmit() {

          try {
            await accountService.editAccount(editable.value)
            // router.push({ 
            //   name: 'Profile', params: {
            //       profileId: editable.value.id
            //     }
            //  })

          } catch ( error ) {
            logger.error( error )
            Pop.toast( '[ACCOUNT FORM COULD NOT BE SUBMITTED]', error )
          }
        }
      }
    }
  }

</script>

<style>

  body {
    background-color: #050522f1;
  }
  .account-form {
  background-image: url('https://i1.sndcdn.com/artworks-000121554211-8emk1d-t500x500.jpg');
  background-size: cover;
  background-repeat: repeat;
  border-radius: .5rem;
  animation: animate 60s ease-in-out infinite;
}



@keyframes animate {
  0%, 100% {
    background-position: left top;
  }

  25% {
    background-position: right bottom;
   }

  50% {
    background-position: left bottom;
  }

  75% {
    background-position: right top;
  }   
}

</style>