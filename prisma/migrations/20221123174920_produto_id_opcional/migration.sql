-- DropForeignKey
ALTER TABLE "estoque" DROP CONSTRAINT "estoque_id_produto_fkey";

-- AlterTable
ALTER TABLE "estoque" ALTER COLUMN "id_produto" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "estoque" ADD CONSTRAINT "estoque_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "produtos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
