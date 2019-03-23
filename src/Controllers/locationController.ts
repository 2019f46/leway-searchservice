import { Request, Response, Router } from "express";
import { LocationRepo, ILocationRepo } from "../Repository/LocationRepo";
import { IProductLocation } from "../Models/location.model";

/**
 * Maps to /api/location
 * Used to peek into the location database.
 */
class LocationController {
  /** Router */
  public locationRouter: Router;
  /** Location Repository */
  public locationRepo: ILocationRepo;

  public constructor() {
    this.locationRouter = Router();
    this.locationRepo = new LocationRepo();
    this.route();
  }

  /**
   * Updates or creates a location in the database.
   * @param req Location JSON in body.
   * @param res Sends the newly created or updated location back
   * @param next Not used
   */
  public updateLocation(req: Request, res: Response, next) {
    let obj: IProductLocation = req.body;
    this.locationRepo
      .addOrUpdateProductLocation(obj)
      .catch(err => {
        res.status(500).send(err);
      })
      .then(obj => {
        res.status(200).send(obj);
      });
  }

  /**
   * Used to get all product locations
   * @param req Not used
   * @param res A list of all product locations
   * @param next Not used
   */
  public getLocations(req: Request, res: Response, next) {
    this.locationRepo
      .getAll()
      .catch(err => {
        res.status(500).send(err);
      })
      .then(obj => {
        res.status(200).send(obj);
      });
  }

  /** Sets routes, called in constructor */
  public route() {
    this.locationRouter.get("/", this.getLocations.bind(this));
    this.locationRouter.put("/", this.updateLocation.bind(this));
  }
}

export default new LocationController().locationRouter;