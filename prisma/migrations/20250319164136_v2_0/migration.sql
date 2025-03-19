/*
  Warnings:

  - The primary key for the `Psicologos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Psicologos` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `VarChar(6)`.

*/
-- AlterTable
ALTER TABLE "Psicologos" DROP CONSTRAINT "Psicologos_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE VARCHAR(6),
ADD CONSTRAINT "Psicologos_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Psicologos_id_seq";
