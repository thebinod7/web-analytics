/*
  Warnings:

  - You are about to drop the column `duration` on the `pages` table. All the data in the column will be lost.
  - You are about to drop the column `visitCount` on the `pages` table. All the data in the column will be lost.
  - You are about to drop the column `visitSource` on the `pages` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[pageUrl]` on the table `pages` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,pageId]` on the table `user_pages` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "pages" DROP COLUMN "duration",
DROP COLUMN "visitCount",
DROP COLUMN "visitSource";

-- AlterTable
ALTER TABLE "user_pages" ADD COLUMN     "duration" INTEGER DEFAULT 0,
ADD COLUMN     "visitCount" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "userAgent" TEXT,
ADD COLUMN     "visitSource" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "pages_pageUrl_key" ON "pages"("pageUrl");

-- CreateIndex
CREATE UNIQUE INDEX "user_pages_userId_pageId_key" ON "user_pages"("userId", "pageId");
