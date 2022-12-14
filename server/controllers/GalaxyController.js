
import BaseController from "../utils/BaseController.js";
import { galaxyService } from "../services/GalaxyService.js";

export class GalaxyController extends BaseController{
    constructor() {
        super('api/galaxy')
        this.router
            .get('', this.getGalaxy)
        .post('',this.createGalaxy)
    }
    async getGalaxy(req,res,next) {
        try {
            const galaxy = await galaxyService.getGalaxy()
            res.send(galaxy)
        } catch (error) {
            next.error
        }
    }
    async createGalaxy(req,res,next) {
        try {
            let galaxyData = req.body
            let galaxy = await galaxyService.createGalaxy(galaxyData)
            res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }
}