<template>
   <section class="container-fluid">
      <img :src="profile?.coverImg">
      <h1>{{ profile?.name }}</h1>
      <h1>{{ profile?.bio }}</h1>
      <img :src="profile?.picture">
      <div class="row justify-content-around">
      <div class="col-5" v-for="b in blogs" :key="b.id">
         <BlogCard :blog="b" />
      </div>
      </div>
   </section>
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
            getBlogsByProfile()
         })
         return {
            profile: computed(() => AppState.activeProfile),
            blogs: computed(() => AppState.blogs)
         }
      }
   }
</script>


<style>

</style>