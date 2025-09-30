-- DropIndex
DROP INDEX `licenses_state_idx` ON `licenses`;

-- AlterTable
ALTER TABLE `licenses` ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE INDEX `licenses_state_active_idx` ON `licenses`(`state`, `active`);
