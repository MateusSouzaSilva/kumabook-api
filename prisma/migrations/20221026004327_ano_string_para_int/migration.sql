/*
  Warnings:

  - Changed the type of `ano_lancamento` on the `produtos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "ano_lancamento",
ADD COLUMN     "ano_lancamento" SMALLINT NOT NULL;
