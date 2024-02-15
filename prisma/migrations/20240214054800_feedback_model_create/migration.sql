-- CreateTable
CREATE TABLE "FeedBack" (
    "id" TEXT NOT NULL,
    "upvoteCount" INTEGER NOT NULL,
    "badgeLetter" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "daysAgo" INTEGER NOT NULL,

    CONSTRAINT "FeedBack_pkey" PRIMARY KEY ("id")
);
