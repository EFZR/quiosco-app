/*
  Warnings:

  - You are about to drop the column `Cat_Id` on the `producto` table. All the data in the column will be lost.
  - Added the required column `Prod_CatId` to the `Producto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `producto` DROP FOREIGN KEY `Producto_Cat_Id_fkey`;

-- AlterTable
ALTER TABLE `producto` DROP COLUMN `Cat_Id`,
    ADD COLUMN `Prod_CatId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Producto` ADD CONSTRAINT `Producto_Prod_CatId_fkey` FOREIGN KEY (`Prod_CatId`) REFERENCES `Categoria`(`Cat_Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
