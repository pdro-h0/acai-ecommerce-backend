import { Injectable } from "@nestjs/common";
import { randomUUID } from "node:crypto";
import { Product } from "src/core";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async save(product: Product) {
    await this.prisma.product.upsert({
      where: {
        id: product.productId ?? randomUUID(),
      },
      update: product,
      create: product,
    });
  }

  async getAll() {
    return await this.prisma.product.findMany({});
  }

  async getById(id: string) {
    return await this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  async exclude(id: string){
    await this.prisma.product.delete({
        where:{
            id
        }
    })
  }
}
