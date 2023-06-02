<template>
  <div class="container-fluid">

    <section class="row">
      <div class="col-8 offset-2">
        <form class="blog-form pt-3 pb-4 elevation-5" @submit.prevent="handleSubmit" style="width: 800px; opacity: .6;">
            <h3><b class="text-light">Create Blog</b></h3>
            <input style="width: 750px;" class="rounded-1 mt-2" type="text" placeholder="title" v-model="editable.title" />
            <br>
            <textarea style="width: 750px; height: 350px;" class="rounded-1 mt-3"  type="text" placeholder="body" v-model="editable.body"></textarea>
            <br>
            <button class="btn btn-primary text-center mt-3 col-2 offset-9" style="opacity: .9;">{{ editable.id ? 'Save' : 'Create' }}</button>
        </form>
      </div>
    </section>

  </div>

</template>


<script>

import { ref, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import { blogsService } from '../services/BlogsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
setup() {
  const editable = ref({})

  watchEffect(() => {
    if (!AppState.activeBlog) { return }
    editable.value = { ...AppState.activeBlog }
  })

  return {
    editable,
    async handleSubmit() {
      try {
        if (editable.value.id) {
          await blogsService.editBlog(editable.value)
        } else {
          await blogsService.createBlog(editable.value)
        }
        editable.value = {}
      } catch (error) {
        logger.error('[Create or Edit Blog]', error)
        Pop.error(error)
      }
    }
  }
}
}

</script>


<style lang="scss" scoped>


.blog-form {
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