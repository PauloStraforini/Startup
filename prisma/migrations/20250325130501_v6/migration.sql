/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Psicologos` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Psicologos" ALTER COLUMN "credencial" SET DATA TYPE VARCHAR(7);

-- CreateIndex
CREATE UNIQUE INDEX "Psicologos_email_key" ON "Psicologos"("email");
