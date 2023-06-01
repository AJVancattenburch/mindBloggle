<template>
  <div class="row">
    <div class="align-items-center justify-space-around card elevation-2 m-4 test" style="max-width: 540px;">
      <div class="row g-0 m-3">
        <div class="col-md-4">
          <img src="https://firebasestorage.googleapis.com/v0/b/thisnightskydoesnotexist.appspot.com/o/images%2Fseed3423.jpg?alt=media" class="img-fluid rounded elevation-5" alt="img">
        </div>
        <div class="col-md-8">
          <div class="card-body text-black" style="opacity: .7; text-shadow: 0 0 5px gray;">
  
            <h5 class="card-title pb-1">
              {{ blog.title }}
            </h5>
            
            <p class="card-text blog-body overflow-auto">{{ blog.body }}</p>
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

  .blog-body::-webkit-scrollbar {
    width: 0;
  } 

  .test {
    height: 25dvh;
  }

</style>