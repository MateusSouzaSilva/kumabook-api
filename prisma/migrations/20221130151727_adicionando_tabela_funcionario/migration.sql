-- CreateTable
CREATE TABLE "funcionario" (
    "id" TEXT NOT NULL,
    "matricula" INTEGER NOT NULL,
    "email" VARCHAR NOT NULL,
    "telefone" INTEGER NOT NULL,
    "horarioTrabalho" VARCHAR NOT NULL,
    "endereco" VARCHAR NOT NULL,

    CONSTRAINT "funcionario_pkey" PRIMARY KEY ("id")
);
