import { IProductLocation, ProductLocationModel} from "../Models/location.model";
import { connect, connection } from "mongoose";
import { SharedStrings } from "Shared/SharedStrings";

export interface ILocationRepo{
    findProducLocations: (ids: String[]) => IProductLocation[]
}

export class LocationRepo implements ILocationRepo {
    
    constructor(){
        // Connect to the db
        connect(SharedStrings.dbUrl, { useNewUrlParser: true });
        connection.once("open", () => {
            console.log("Connection has been established")
        });
    }
    
    public findProducLocations(ids: String[]): IProductLocation[]{
        let results: IProductLocation[] = [];

        for(let id in ids){
            ProductLocationModel.find({productId: id}, (err, model) => {
                if(!err){
                    results.push(model as any);
                }
            });
        }

        return results;
    }
}