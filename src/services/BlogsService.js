import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger.js"

class BlogsService {
  async getBlogs() {
    const res = await api.get( 'api/blogs' )
    // logger.log( res.data )
    AppState.blogs = res.data.map(b => new Blog(b))
    logger.log( AppState.blogs )
  }
  async getBlogsByProfile(id){
    AppState.blogs = [] 
    const res = await api.get('api/blogs', {
      params: {
        creatorId: id
      }
    })
    logger.log(res.data)
    AppState.blogs = res.data.map(b => new Blog(b))
  }

  async createBlog(body) {
    const res = await api.post('api/blogs', body)
    logger.log(res.data)
    AppState.blogs.push(new Blog(res.data))
  }

  async editBlog(id, body) {
    const res = await api.put(`api/blogs/${id}`, body)
    logger.log(res.data)
    AppState.activeBlog = new Blog(res.data)
  }












}








export const blogsService = new BlogsService()