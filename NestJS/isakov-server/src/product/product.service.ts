import { Injectable } from "@nestjs/common";
import { products } from "./const";


@Injectable()
export class ProductService {
    public getProduct(id: number) {
        return products.find(el => el.id === id)
    }

    public getProducts() {
        return products
    }
}