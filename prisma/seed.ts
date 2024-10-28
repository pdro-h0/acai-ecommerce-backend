import { PrismaClient } from "@prisma/client";
import { products } from "src/core";

const prisma = new PrismaClient();

const seed = async () => {
  await prisma.product.createMany({
    data: products.map((product) => ({ ...product })),
  });
};

seed();
