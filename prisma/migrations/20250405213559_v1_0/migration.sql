-- CreateTable
CREATE TABLE "psicologos" (
    "_id" UUID NOT NULL,
    "crp" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "psicologos_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "psicologos_crp_key" ON "psicologos"("crp");

-- CreateIndex
CREATE UNIQUE INDEX "psicologos_email_key" ON "psicologos"("email");
