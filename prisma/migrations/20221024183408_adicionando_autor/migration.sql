/*
  Warnings:

  - Added the required column `autor` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "produtos" ADD COLUMN     "autor" VARCHAR(50) NOT NULL;
