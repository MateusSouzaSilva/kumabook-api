/*
  Warnings:

  - You are about to drop the column `id_produto` on the `estoque` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id_estoque]` on the table `produtos` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "estoque" DROP CONSTRAINT "estoque_id_produto_fkey";

-- AlterTable
ALTER TABLE "estoque" DROP COLUMN "id_produto";

-- AlterTable
ALTER TABLE "produtos" ADD COLUMN     "id_estoque" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "produtos_id_estoque_key" ON "produtos"("id_estoque");

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "produtos_id_estoque_fkey" FOREIGN KEY ("id_estoque") REFERENCES "estoque"("id") ON DELETE SET NULL ON UPDATE CASCADE;
