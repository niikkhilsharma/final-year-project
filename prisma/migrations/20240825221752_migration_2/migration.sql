-- AlterTable
ALTER TABLE "User" ADD COLUMN     "collegeId" TEXT,
ADD COLUMN     "role" TEXT;

-- CreateTable
CREATE TABLE "College" (
    "collegeId" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "collegeName" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "image" TEXT,
    "websiteUrl" TEXT NOT NULL,
    "about" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "College_collegeId_key" ON "College"("collegeId");

-- CreateIndex
CREATE UNIQUE INDEX "College_createdBy_key" ON "College"("createdBy");

-- AddForeignKey
ALTER TABLE "College" ADD CONSTRAINT "College_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("email") ON DELETE NO ACTION ON UPDATE CASCADE;
