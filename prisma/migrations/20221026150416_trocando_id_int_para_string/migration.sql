/*
  Warnings:

  - The primary key for the `produtos` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "produtos" DROP CONSTRAINT "produtos_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "produtos_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "produtos_id_seq";
