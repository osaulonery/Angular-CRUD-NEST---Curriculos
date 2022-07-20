-- CreateTable
CREATE TABLE "curriculo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" INTEGER NOT NULL,
    "datanasc" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "escolaridade" TEXT NOT NULL,
    "funcao" TEXT NOT NULL,
    "competencias" TEXT NOT NULL,

    CONSTRAINT "curriculo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "curriculo_name_key" ON "curriculo"("name");

-- CreateIndex
CREATE UNIQUE INDEX "curriculo_cpf_key" ON "curriculo"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "curriculo_email_key" ON "curriculo"("email");
