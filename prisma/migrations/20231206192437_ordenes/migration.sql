-- CreateTable
CREATE TABLE `Orden` (
    `Ord_Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Ord_Nombre` VARCHAR(191) NOT NULL,
    `Ord_Fecha` VARCHAR(191) NOT NULL,
    `Ord_Total` DOUBLE NOT NULL,
    `Ord_Pedido` JSON NOT NULL,

    PRIMARY KEY (`Ord_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
