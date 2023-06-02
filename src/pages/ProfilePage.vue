<template>
  
  <section class="container-fluid"></section>
  <div class="card bg-dark" v-if="profile">
    <!-- <div v-if="profile.id == account.id">
      <router-link class="link active-link text-end fs-3" style="color: darkblue;" :to="{ name: 'Account' }">Edit Profile</router-link>
    </div> -->
    <img class="col-12 img-fluid" style="opacity: .7;" :src="profile?.coverImg" :alt="profile?.name">
    <div class="d-flex flex-column align-items-end me-5 fs-4">
      <img class="profile-img rounded-circle img-fluid" :src="profile?.picture" style="opacity: .95; border: 5px solid gray;">
      <div class="me-5 pe-2 pt-3">
        <b class="me-5">{{ profile?.name }}</b>
      </div>
    </div>
    <div>
      <div class="fs-3 pt-3 ms-5"><b>About Me:</b> <br>
        <em class="fs-5 fw-5 text-muted" style="text-shadow: 0 0 1px black;">{{ profile?.bio }}</em>
      </div>
    </div>
    <!-- <div class="card-body">
      <a href="#">Card link</a>
    </div> -->
    <div class="col-12 blog-list  ms-5 mt-5 text-dark" v-for="b in blogs" :key="b.id">
      <h3 class="text-center mb-5">Mind Bloggles:</h3>
      <BlogCard :blog="b" />
    </div>
  </div>
  <div style="position: absolute; top: 50%; left: 50%;" v-else>
    <div class="spinner-border text-info" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

</template>

<script>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
import { profileService } from '../services/ProfileService.js';
import { Profile } from '../models/Profile.js'
import { Account } from '../models/Account.js'
import { blogsService } from '../services/BlogsService.js';
   export default {
      props: {
         profile: {type: [Profile, Account], required: true}
      },
      setup(props){
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
            blogs: computed(() => AppState.blogs),
            coverImg: computed(() => `url(${props.profile?.coverImg})`)
         }
      }
   }
</script>


<style lang="scss">

   .profile{
      background-size: contain;
      background-image: v-bind(coverImg);
   }

   .profile-img {
    margin-top: -6rem;
    max-width: 300px;
    aspect-ratio: 1/1;
   }

   .blog-list {
    width: 90dvw;
   }

</style>