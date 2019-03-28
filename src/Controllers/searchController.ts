import { Request, Response, Router } from "express";
import { IProductRepo, ProductRepo } from "../Repository/ProductRepo";
import { IProduct } from "../Models/product.model";
import { ILocationRepo, LocationRepo } from "../Repository/LocationRepo";
import { IProductLocation } from "../Models/location.model";

/**
 * The search controller, that will serve the endpoint /api/search
 * Will search for products and their locations
 */
class SearchController {
  /** Router */
  public searchRouter: Router;
  /** Product repository */
  public productRepo: IProductRepo;
  /** Location repository */
  public locationRepo: ILocationRepo;

  public constructor() {
    this.searchRouter = Router();
    this.route();
    this.productRepo = new ProductRepo();
    this.locationRepo = new LocationRepo();
  }

  /**
   * Get Products maps to GET /api/search/:query
   * @param req The product query as URL parameter
   * @param res A list of products matching the query, with locations
   * @param next Not used
   */
  public async getProducts(req: Request, res: Response, next) {
    let query = req.params.query;

    // Get the product list
    let prods: IProduct[];
    try {
      prods = await this.productRepo.findProducts(query);
    } catch (error) {
      if (error.response.status === 404) {
        res.status(404).send();
      } else {
        res.status(500).send(error.message);
      }
      return;
    }

    if (prods.length === 0) {
      res.status(404).send();
      return;
    }

    // Get the location
    let pIds = prods.map(p => p.id);
    let locs;
    try {
      locs = await this.locationRepo.findProductLocations(pIds);
    } catch (error) {
      res.status(500).send(error.message);
      return;
    }

    // Join the list
    for (let prod of prods) {
      // Find and add coords
      let location: IProductLocation = locs.find(obj => {
        return obj.productId === prod.id;
      });
      if (location) prod.location = location.coords;
    }

    // Return the response
    res.status(200).send(prods);
  }

  /** Sets routes, called in constructor */
  public route() {
    this.searchRouter.get("/:query", this.getProducts.bind(this));
  }
}

export default new SearchController().searchRouter;
