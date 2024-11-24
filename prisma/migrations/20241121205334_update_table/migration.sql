/*
  Warnings:

  - You are about to drop the `index` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `index`;

-- CreateTable
CREATE TABLE `Index` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `equipamentos` VARCHAR(191) NOT NULL,
    `valor_em_compras` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
