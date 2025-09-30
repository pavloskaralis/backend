/*
  Warnings:

  - Added the required column `date` to the `time_slots` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `time_slots` ADD COLUMN `date` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE INDEX `time_slots_doctor_id_date_idx` ON `time_slots`(`doctor_id`, `date`);
