/*
  Warnings:

  - The primary key for the `Psicologos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[credencial]` on the table `Psicologos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `credencial` to the `Psicologos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Psicologos" DROP CONSTRAINT "Psicologos_pkey",
ADD COLUMN     "credencial" VARCHAR(6) NOT NULL,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Psicologos_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Psicologos_credencial_key" ON "Psicologos"("credencial");
