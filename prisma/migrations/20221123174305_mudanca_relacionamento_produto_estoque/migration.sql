/*
  Warnings:

  - You are about to drop the column `id_estoque` on the `produtos` table. All the data in the column will be lost.
  - Added the required column `id_produto` to the `estoque` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "produtos" DROP CONSTRAINT "produtos_id_estoque_fkey";

-- DropIndex
DROP INDEX "produtos_id_estoque_key";

-- AlterTable
ALTER TABLE "estoque" ADD COLUMN     "id_produto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "id_estoque";

-- AddForeignKey
ALTER TABLE "estoque" ADD CONSTRAINT "estoque_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
