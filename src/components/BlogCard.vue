<template>
  <div class="row">
    <div class="align-items-center card elevation-2 m-4" style="max-width: 540px;">
      <div class="row g-0 m-3">
        <div class="col-md-4">
          <router-link :to="{name: 'Profile', params: { id: blog.creatorId }}">
            <img :src="blog.creator.picture" class="img-fluid blog-creator-img rounded-circle elevation-5" alt="img">
            <h2 class="text-center">{{ blog.creator.name }}</h2>
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body text-black" style="opacity: .7; text-shadow: 0 0 5px gray;">
            <h5 class="card-title pb-1">
              {{ blog.title }}
            </h5>
            <p class="card-text blog-body overflow-auto">{{ blog.body }}</p>
            <img class="img-fluid rounded blog-picture" :src="blog.imgUrl">
          </div>
        </div>
      </div>
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

<style>

  img {
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .blog-body {
    max-height: 100px;
  }

  .blog-picture {
    max-height: 300px;
    aspect-ratio: 1/1;
  }

  .blog-creator-img{
    aspect-ratio: 1/1;
    opacity: 80%;
    border: 5px solid rgba(197, 194, 194, 0.771);
  }

  .blog-body::-webkit-scrollbar {
    width: 0;
  } 

  .test {
    height: 25dvh;
  }

  *{
    border: 1px solid rgb(205, 153, 147);
  }

</style>