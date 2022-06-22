-- CreateTable
CREATE TABLE "Avocado" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "sku" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Avocado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attributes" (
    "avocadoId" INTEGER NOT NULL,
    "hardiness" TEXT,
    "id" SERIAL NOT NULL,
    "shape" TEXT,
    "taste" TEXT,

    CONSTRAINT "Attributes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Avocado_sku_key" ON "Avocado"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "Attributes_avocadoId_key" ON "Attributes"("avocadoId");

-- AddForeignKey
ALTER TABLE "Attributes" ADD CONSTRAINT "Attributes_avocadoId_fkey" FOREIGN KEY ("avocadoId") REFERENCES "Avocado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
