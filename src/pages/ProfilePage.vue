<template>
   <div class="container-fluid">
      Hello from the profile page
   </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
import { profileService } from '../services/ProfileService.js';
import { blogsService } from '../services/BlogsService.js';
   export default {
      setup(){
         const route = useRoute(); 
         async function getProfile(){
            try {
               await profileService.getProfileByID(route.params.id)
            } catch (error) {
               Pop.error(error)
            }
         } 
         async function getBlogsByProfile(){
            try {
               await blogsService.getBlogsByProfile(route.params.id)
            } catch (e){
               Pop.error(e)
            }
         } 
         onMounted(() => {
            getProfile()
         })
         return {
            profile: computer(() => AppState.activeProfile)
         }
      }
   }
</script>


<style>

</style>