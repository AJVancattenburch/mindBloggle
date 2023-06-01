import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { logger } from "../utils/Logger.js"

class ProfileService{
   async getProfileByID(id){
      const res = await api.get('/api/profiles/' + id)
      AppState.activeProfile = new Profile(g)
      logger.log(AppState.activeProfile)
   }
}

export const profileService = new ProfileService()