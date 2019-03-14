import { Request, Response, Router } from "express";

/**
 * The search controller, that will serve the endpoint /api/search
 * Will search for products and their locations
 */
class SearchController {
  /** Router */
  public searchRouter: Router;

  public constructor() {
    this.searchRouter = Router();
    this.route();
  }

  /**
   * Get Products maps to GET /api/search/:query
   * @param req The product query as URL parameter
   * @param res A list of products matching the query, with locations
   * @param next Not used
   */
  public getProducts(req: Request, res: Response, next){
    let query = req.params.query;

    // Get the product list

    // Get the location

    // Join the list

    // 
  }

  /** Sets routes, called in constructor */
  public route() {
    this.searchRouter.get("/:query", this.getProducts.bind(this));
  }
}

export default new SearchController().searchRouter;
