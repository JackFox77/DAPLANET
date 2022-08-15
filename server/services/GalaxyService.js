import { dbContext } from "../db/DbContext.js"

class GalaxyService{
        

    async getGalaxy() {
        let galaxys = await dbContext.Galaxy.find()
        return galaxys
    }
    async createGalaxy(galaxyData) {
        let galaxy = await dbContext.Galaxy.create(galaxyData)
        return galaxy
    }
}



export const galaxyService= new GalaxyService()