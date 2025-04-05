/*
  Warnings:

  - The primary key for the `psicologos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `_id` column on the `psicologos` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "psicologos" DROP CONSTRAINT "psicologos_pkey",
DROP COLUMN "_id",
ADD COLUMN     "_id" SERIAL NOT NULL,
ADD CONSTRAINT "psicologos_pkey" PRIMARY KEY ("_id");
