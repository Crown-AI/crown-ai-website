/*
  Warnings:

  - The primary key for the `ChatMessage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `content` on the `ChatMessage` table. All the data in the column will be lost.
  - You are about to drop the column `messageId` on the `ChatMessage` table. All the data in the column will be lost.
  - You are about to drop the column `senderId` on the `ChatMessage` table. All the data in the column will be lost.
  - The `id` column on the `ChatMessage` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `email` to the `ChatMessage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message` to the `ChatMessage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `ChatMessage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ChatMessage" DROP CONSTRAINT "ChatMessage_messageId_fkey";

-- DropForeignKey
ALTER TABLE "ChatMessage" DROP CONSTRAINT "ChatMessage_senderId_fkey";

-- AlterTable
ALTER TABLE "ChatMessage" DROP CONSTRAINT "ChatMessage_pkey",
DROP COLUMN "content",
DROP COLUMN "messageId",
DROP COLUMN "senderId",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "message" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ChatMessage_pkey" PRIMARY KEY ("id");
