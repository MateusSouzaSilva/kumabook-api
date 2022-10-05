-- CreateTable
CREATE TABLE "produtos" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "ano_lancamento" VARCHAR(4) NOT NULL,
    "editora" VARCHAR(20) NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "data_criacao" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_atualizacao" TIMESTAMPTZ(3) NOT NULL,
    "data_exclusao" TIMESTAMP(3),

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "produtos_nome_key" ON "produtos"("nome");
