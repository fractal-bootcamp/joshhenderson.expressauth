-- CreateTable
CREATE TABLE "Users" (
    "email" TEXT NOT NULL,
    "password" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
