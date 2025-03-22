/*
  Warnings:

  - The primary key for the `Psicologos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Psicologos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `senha` on the `Psicologos` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "Psicologos" DROP CONSTRAINT "Psicologos_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "senha" SET DATA TYPE VARCHAR(255),
ADD CONSTRAINT "Psicologos_pkey" PRIMARY KEY ("id");
