/*
  Warnings:

  - A unique constraint covering the columns `[matricula]` on the table `funcionario` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "funcionario_matricula_key" ON "funcionario"("matricula");
