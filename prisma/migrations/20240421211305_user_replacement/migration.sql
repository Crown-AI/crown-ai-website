/*
  Warnings:

  - You are about to drop the column `email` on the `ChatMessage` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `ChatMessage` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ChatMessage" DROP COLUMN "email",
DROP COLUMN "username",
ADD COLUMN     "ownerId" TEXT;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
