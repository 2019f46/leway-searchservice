import { IProductLocation, ProductLocationModel } from "../Models/location.model";
import { connect, connection } from "mongoose";
import { SharedStrings } from "../Shared/SharedStrings";

/** Location Repository Interface */
export interface ILocationRepo {
    findProductLocations: (ids: String[]) => Promise<IProductLocation[]>;
    addOrUpdateProductLocation: (l: IProductLocation) => Promise<IProductLocation>;
    getAll: () => Promise<IProductLocation[]>;
}

/**
 * Location repository
 * Used as an abstraction layer between controller logic and database specific code.
 */
export class LocationRepo implements ILocationRepo {

    /**
     * Connects to the database when created
     */
    constructor() {
        // Connect to the db
        connect(SharedStrings.dbUrl, { useNewUrlParser: true });
        connection.once("open", () => {
            console.log("Connection has been established")
        });
    }

    /**
     * Will iterate a list of IDs, and find a matching location in the database
     * Will finally return a list of locations
     * @param ids List of IDs to find
     * @returns IProductLocation array, with all matching locations
     */
    public findProductLocations(ids: String[]): Promise<IProductLocation[]> {
        return ProductLocationModel.find({ productId: { $in: ids }}).exec();
    }

    /**
     * Finds a location based on ID, and updates or creates it in the db
     * @param l New location for update or creation
     * @returns New location
     */
    public addOrUpdateProductLocation(l: IProductLocation): Promise<IProductLocation>{
        let location = new ProductLocationModel(l);

        return ProductLocationModel.findOneAndUpdate(
            {productId: location.productId}, 
            {$set: {coords: location.coords}}, 
            {upsert: true, setDefaultsOnInsert: true, new: true}).exec();
    }

    /**
     * Gets all locations in the db
     * @returns A list of all product locations
     */
    public getAll(): Promise<IProductLocation[]> {
        return ProductLocationModel.find().exec();
    }
}