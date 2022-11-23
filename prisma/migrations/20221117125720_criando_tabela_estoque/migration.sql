-- CreateTable
CREATE TABLE "estoque" (
    "id" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "localizacao" VARCHAR(200) NOT NULL,
    "id_produto" TEXT NOT NULL,

    CONSTRAINT "estoque_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "estoque_id_produto_key" ON "estoque"("id_produto");

-- AddForeignKey
ALTER TABLE "estoque" ADD CONSTRAINT "estoque_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
