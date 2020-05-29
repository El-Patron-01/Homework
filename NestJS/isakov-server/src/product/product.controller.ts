import { Controller, Param, Get, Inject } from "@nestjs/common";
import { ProductService } from "./product.service";
import { products } from "./const";


@Controller('products')
export class ProductController {
  constructor(
      private ProductService: ProductService //@Inject('ProductService') private ProductService: ProductService
  ) {}

  @Get('')
  getProducts () {
    return this.ProductService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id) {
        return this.ProductService.getProduct(+id)
  }
}