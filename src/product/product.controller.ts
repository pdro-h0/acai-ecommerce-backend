import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product } from "src/core";

@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  saveProduct(@Body() product: Product) {
    return this.productService.save(product);
  }

  @Get()
  getProducts() {
    return this.productService.getAll();
  }

  @Get(":id")
  getProduct(@Param("id") id: string) {
    return this.productService.getById(id);
  }

  @Delete(":id")
  excludeProduct(@Param("id") id: string) {
    return this.productService.exclude(id);
  }
}
