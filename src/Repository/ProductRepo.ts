import { IProduct } from "Models/product.model";
import axios from "axios";
import { SharedStrings } from "Shared/SharedStrings";

/** Product Repository Interface */
export interface IProductRepo {
    findProducts: (product: string) => Promise<IProduct[]>;
}

/** Product repository
 * Used as an abstraction between logic and http specific code
 */
export class ProductRepo implements IProductRepo {
    
    /**
     * Function used to find products using a query string.
     * Will contact the product service to get the data
     * @param product Product query.
     * @returns Promise, with an array of products.
     */
    public findProducts = async (product: string): Promise<IProduct[]> => {
        let url: string = `${SharedStrings.searchProductUrl}/${product}`
        
        let response = await axios.get(url);

        return [{ name: "ggWP" }] as any;
    }
}