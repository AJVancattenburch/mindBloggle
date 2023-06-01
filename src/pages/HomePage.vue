<template>
  
  <section class="container-fluid">
    <div class="row justify-content-around">
      <div class="col-5" v-for="b in blogs" :key="b.id">
        <BlogCard :blog="b" />
      </div>
    </div>
    <!-- <div class="card m-4" style="max-width: 540px;">
      <div class="row g-0 m-3">
        <div class="col-md-4">
          <img src="https://firebasestorage.googleapis.com/v0/b/thisnightskydoesnotexist.appspot.com/o/images%2Fseed3423.jpg?alt=media" class="img-fluid rounded-start h-100" alt="img">
        </div>
        <div class="col-md-8">
          <div class="card-body text-black" style="opacity: .7; text-shadow: 0 0 5px gray;">

            <h5 class="card-title">
              <b class="fs-4">
                How To use most common Keywords
              </b>
              <small class="fs-5">
                <i> 
                  (and why you should care)
                </i>
              </small>
            </h5>
            
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
    </div> -->

  </section>

</template>

<script>

import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { onMounted, computed } from "vue";
import { blogsService } from '../services/BlogsService.js'


export default {
  setup() {
    async function getBlogs() {
      try {
        await blogsService.getBlogs()
      } catch ( error ) {
        logger.error( '[RETRIEVING BLOGS]', error )
        Pop.toast( '[COULD NOT RETRIEVE BLOGS]', error )
      }
    }

    onMounted(() => {
      getBlogs()
    })
    return {
      blogs: computed(() => AppState.blogs)
    }
  }
}

</script>

<style scoped lang="scss">


</style>
