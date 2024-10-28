import { Injectable } from "@nestjs/common";
import { Ordered } from "src/core";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class OrderedService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.ordered.findMany({});
  }

  async getById(id: string) {
    return await this.prisma.ordered.findUnique({
      where: {
        id,
      },
      include: {
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
              },
            },
            ordered: true,
          },
        },
      },
    });
  }

  async save(ordered: Ordered) {
    await this.prisma.ordered.create({
      data: {
        date: ordered.date,
        totalValor: ordered.totalValor,
        items: {
          create: ordered.items.map((item) => ({
            productId: item.product.productId,
            unitPrice: item.unitPrice,
            quantity: item.quantity,
          })),
        },
      },
    });
  }

  async exclude(id: string) {
    const ordered = await this.prisma.ordered.findUnique({
      where: {
        id,
      },
    });

    if (!ordered) return;
    await this.prisma.$transaction([
      this.prisma.orderedItem.deleteMany({ where: { orderedId: id } }),
      this.prisma.ordered.delete({ where: { id } }),
    ]);
  }
}
