/*
  Warnings:

  - You are about to drop the column `id_produto` on the `estoque` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id_estoque]` on the table `produtos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_estoque` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "estoque" DROP CONSTRAINT "estoque_id_produto_fkey";

-- DropIndex
DROP INDEX "estoque_id_produto_key";

-- AlterTable
ALTER TABLE "estoque" DROP COLUMN "id_produto";

-- AlterTable
ALTER TABLE "produtos" ADD COLUMN     "id_estoque" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "produtos_id_estoque_key" ON "produtos"("id_estoque");

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "produtos_id_estoque_fkey" FOREIGN KEY ("id_estoque") REFERENCES "estoque"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
