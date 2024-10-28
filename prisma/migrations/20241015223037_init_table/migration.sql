-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "base_price" DOUBLE PRECISION NOT NULL,
    "promotional_price" DOUBLE PRECISION NOT NULL,
    "smallest_price" DOUBLE PRECISION NOT NULL,
    "heighest_price" DOUBLE PRECISION NOT NULL,
    "average_price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orderedItem" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitPrice" DOUBLE PRECISION NOT NULL,
    "orderedId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "orderedItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ordereds" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "total_valor" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ordereds_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "orderedItem" ADD CONSTRAINT "orderedItem_orderedId_fkey" FOREIGN KEY ("orderedId") REFERENCES "ordereds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderedItem" ADD CONSTRAINT "orderedItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
