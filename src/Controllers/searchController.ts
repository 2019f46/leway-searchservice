import { Request, Response, Router } from "express";

class SearchController {
  public searchRouter: Router;

  public constructor() {
    this.searchRouter = Router();
    this.route();
  }

  public getProducts(req: Request, res: Response, next){
    let query = req.params.query;

    // Get the product list

    // Get the location

    // Join the list

    // 
  }

  public route() {
    this.searchRouter.get("/:query", this.getProducts.bind(this));
  }
}

export default new SearchController().searchRouter;
