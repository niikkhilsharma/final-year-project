/*
  Warnings:

  - You are about to drop the column `collegeId` on the `User` table. All the data in the column will be lost.
  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `College` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('STUDENT', 'CLUBHEAD', 'SACHEAD');

-- CreateEnum
CREATE TYPE "ClubCategory" AS ENUM ('Technical', 'Cultural', 'Sports');

-- DropForeignKey
ALTER TABLE "College" DROP CONSTRAINT "College_createdBy_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "collegeId",
ADD COLUMN     "identityDocUrl" TEXT,
ADD COLUMN     "organisationId" TEXT,
DROP COLUMN "role",
ADD COLUMN     "role" "UserRole";

-- DropTable
DROP TABLE "College";

-- CreateTable
CREATE TABLE "Organisation" (
    "organisationId" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "collegeName" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "websiteUrl" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Clubs" (
    "organisationId" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "coordinatorName" TEXT NOT NULL,
    "coCoordinatorName" TEXT NOT NULL,
    "category" "ClubCategory" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Organisation_organisationId_key" ON "Organisation"("organisationId");

-- CreateIndex
CREATE UNIQUE INDEX "Organisation_createdBy_key" ON "Organisation"("createdBy");

-- CreateIndex
CREATE UNIQUE INDEX "Clubs_organisationId_key" ON "Clubs"("organisationId");

-- CreateIndex
CREATE UNIQUE INDEX "Clubs_createdBy_key" ON "Clubs"("createdBy");

-- AddForeignKey
ALTER TABLE "Organisation" ADD CONSTRAINT "Organisation_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("email") ON DELETE NO ACTION ON UPDATE CASCADE;
