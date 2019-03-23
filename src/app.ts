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
    // Middleware for setting cors related headers in response
    this.app.use(function(req, res, next) {
      res.append("Access-Control-Allow-Origin", "*");
      res.append("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
      res.append("Access-Control-Allow-Headers", "SessionId, Content-Type");
      next();
    });
    
    // ROUTES
    this.app.use("/api/search", searchController);
    this.app.use("/api/location", locationController);
  }
}

export default new App().app;
