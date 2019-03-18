import { IProductLocation, ProductLocationModel } from "../Models/location.model";
import { connect, connection } from "mongoose";
import { SharedStrings } from "../Shared/SharedStrings";

/** Location Repository Interface */
export interface ILocationRepo {
    findProductLocations: (ids: String[]) => IProductLocation[];
    addOrUpdateProductLocation: (l: IProductLocation) => IProductLocation;
    getAll: () => IProductLocation[];
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
    public findProductLocations(ids: String[]): IProductLocation[] {
        let results: IProductLocation[] = [];

        for (let id in ids) {
            ProductLocationModel.find({ productId: id }, (err, model) => {
                if (!err) {
                    results.push(model as any);
                }
            });
        }

        return results;
    }

    public addOrUpdateProductLocation(l: IProductLocation){
        let location = new ProductLocationModel(l);

        // ProductLocationModel.findOneAndUpdate(
        //     {productId: location.productId}, 
        //     {$set: {coords: location.coords}}, 
        //     {upsert: true, setDefaultsOnInsert: true, new: true}, 
        //     (err, result) => {
        //     return result;
        // });

        return location;
    }

    public getAll(): IProductLocation[] {
        // ProductLocationModel.find((err, result) => {
        //     if(err){

        //     }
        //     return result;
        // })
        let r = new ProductLocationModel();
        return [r];
    }
}