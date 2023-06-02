<template>
  
  <section class="container-fluid">
    <div class="row justify-content-around">
      <div class="col-5 blog-card my-3" v-for="b in blogs" :key="b.id">
        <BlogCard :blog="b" />
      </div>
    </div>
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

body {
  background-color: #050522f1;
}

</style>
