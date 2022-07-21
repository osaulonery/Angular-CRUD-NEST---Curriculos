/*
  Warnings:

  - Added the required column `status` to the `curriculo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "curriculo" ADD COLUMN     "status" TEXT NOT NULL;
