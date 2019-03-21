import * as express from "express";
import * as bodyParser from "body-parser";
import searchController from "./Controllers/searchController";
import locationController from "./Controllers/locationController";

/**
 * SEARCH SERVICE
 * Service for searching
 * Uses the Product service to get products
 * Locations are stored in a database owned by this service
 * Maps to endpoints:
 * - /api/search
 *   Here you can GET to search for a product and it's location
 * - /api/location
 *   Here you can GET and PUT locations
 */
class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));

    // Setup routes
    this.setRoutes();
  }

  private setRoutes(): void {
    this.app.use("/api/search", searchController);
    this.app.use("/api/location", locationController);
  }
}

export default new App().app;
