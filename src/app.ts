import * as express from "express";
import * as bodyParser from "body-parser";
import searchController from "./Controllers/searchController";
import locationController from "./Controllers/locationController";

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
        this.app.use('/api/search', searchController);
        this.app.use('/api/location', locationController);
    }
}

export default new App().app;
