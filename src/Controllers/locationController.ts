import { Request, Response, Router } from "express";
import { LocationRepo, ILocationRepo } from "../Repository/LocationRepo";

class LocationController {
  /** Router */
  public locationRouter: Router;
  public locationRepo: ILocationRepo;

  public constructor() {
    this.locationRouter = Router();
    this.locationRepo = new LocationRepo();
    this.route();
  }

  public updateLocation(req: Request, res: Response, next) {}
  public getLocation(req: Request, res: Response, next) {}
  public getLocations(req: Request, res: Response, next) {}

  /** Sets routes, called in constructor */
  public route() {
    this.locationRouter.get("/:location", this.getLocation.bind(this));
    this.locationRouter.get("/", this.getLocations.bind(this));
    this.locationRouter.put("/", this.updateLocation.bind(this));
  }
}

export default new LocationController().locationRouter;
