import { IProduct } from "Models/product.model";
import axios from "axios";

/** Product Repository Interface */
export interface IProductRepo {
    findProducts: (product: string) => Promise<IProduct[]>;
}

export class ProductRepo implements IProductRepo {
    public findProducts = async (product: string): Promise<IProduct[]> => {
        let products = await axios.get("https://httpbin.org/get");
        // map products over to an actual product or json parse it, before returning
        return products as any;
    }
}