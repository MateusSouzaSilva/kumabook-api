/*
  Warnings:

  - Added the required column `nome` to the `funcionario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "funcionario" ADD COLUMN     "nome" VARCHAR NOT NULL;
