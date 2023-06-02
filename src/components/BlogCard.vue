<template>

  <div class="card mt-1" style="width: 500px; opacity: .8;">
    <div class="row g-0">
      <div class="col-md-3 d-flex pt-2">
        <img class="ms-2 img-fluid rounded h-75 align-self-center blog-picture" :src="blog.imgUrl">
      </div>
      <div class="col-md-7">
        <div class="card-body">
          <h5 class="card-title text-center">"{{ blog.title }}"</h5>
          <p class="small text-center p-0"><i>A memoir</i></p>
          <h6 class="text-end p-0">Blogger: {{ blog.creator.name }}</h6>
          <p class="blog-body overflow-auto p-1 ms-2 mb-5" style="border: 3px solid slateblue; border-style: inset groove; border-radius: .5rem; text-shadow: 0 0 1px black; font-weight: 600; opacity: 1;">{{ blog.body }}</p>
        </div>
      </div>
      <div class="col-md-2">
        <router-link id="router-link" :to="{ name: 'Profile', params: { id: blog.creatorId }}">
          <img :src="blog.creator.picture" class="img-fluid creator-img rounded-start p-1" :alt="blog.createdAt">
        </router-link>
        <p class="mt-1 mx-1 text-center" style="font-size: 14px; color: dodgerblue; text-shadow: 1px 1px 1px black; font-weight: 600;">
          Click Image to view Profile
        </p>
      </div>
      <!-- <div class="col-5 offset-7 small mb-1">
        Published: {{ blog.createdAt }}
      </div> -->
    </div>
  </div>

</template>

<script>
  
  import { AppState } from "../AppState.js";
  import { logger } from "../utils/Logger.js";
  import { Blog } from "../models/Blog.js";
  

  export default {
    props: {
      blog: { type: Blog, required: true }
    },
    setup(props) {
      return {}
    }
  }

</script>

<style lang="scss" scoped>

  img {
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .creator-img:hover {
    background-color: rgb(48, 42, 92);
    color: rgb(48, 42, 92);
    transition: .5s;
  }

  .blog-body {
    max-height: 200px;
  }

  .blog-picture {
    max-height: 300px;
    aspect-ratio: 1/1;
  }

  .blog-creator-img{
    aspect-ratio: 1/1;
    opacity: 80%;
    border: 5px solid #c5c2c2c5;
  }

  .blog-body::-webkit-scrollbar {
    width: 0;
  } 

  .test {
    max-height: 20dvh;
  }

</style>