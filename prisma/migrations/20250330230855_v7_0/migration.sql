/*
  Warnings:

  - Added the required column `password` to the `Psicologos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Psicologos" ADD COLUMN     "password" TEXT NOT NULL;
