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
    const res = api.get('api/blogs', {
      params: {
        creatorId: id
      }
    })
    AppState.blogs = res.data.map(b => new Blog(b))
    logger.log(AppState.blogs)
  }
}








export const blogsService = new BlogsService()