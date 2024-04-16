/*
  Warnings:

  - A unique constraint covering the columns `[usename]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `usename` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "usename" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_usename_key" ON "User"("usename");
