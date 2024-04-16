/*
  Warnings:

  - A unique constraint covering the columns `[usename]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `usename` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
SELECT usename, COUNT(*) OVER (PARTITION BY usename) as unique_check
FROM "User"
WHERE unique_check > 1;


WITH CTE AS (
 SELECT id, ROW_NUMBER() OVER (PARTITION BY usename ORDER BY id) AS rn
 FROM "User"
)
DELETE FROM "User"
WHERE id IN (SELECT id FROM CTE WHERE rn > 1);


ALTER TABLE "User" ADD COLUMN "usename" TYPE;

-- CreateIndex
CREATE UNIQUE INDEX "User_usename_key" ON "User"("usename");