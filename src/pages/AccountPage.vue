<template>

  <div class="about text-center pt-3 bg-darkmode">
    <div>
  
        <BlogForm :profile="account" />
  

    </div>
    <h1 class="mb-5 mt-3 text-light">Hello {{ account.name }}, 
      <br>
      ready to have a Mind Bloggling Day?</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>

<div class="row">
  <div class="col-md-6 offset-3">

    <AccountForm class="bg-dark" />


  </div>
</div>
<div>
  <h1 class="text-center text-light">My Blogs:</h1>
  <div class="col-12 blog-list mt-5 text-light" v-for="b in blogs" :key="b.id">
    <BlogCard class=" ms-4 bg-animate elevation-5" :blog="b" />
  </div>
</div>

</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import AccountForm from '../components/AccountForm.vue'
import BlogCard from '../components/BlogCard.vue'
import BlogForm from '../components/BlogForm.vue'

export default {
  setup() {
    return {
      blogs: computed(() => AppState.blogs),
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
.bg-darkmode {
  background-color: #21213e;
}

img {
  max-width: 100px;
}
</style>
