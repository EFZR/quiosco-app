-- CreateTable
CREATE TABLE `Producto` (
    `Prod_Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Prod_Nombre` VARCHAR(191) NOT NULL,
    `Prod_Precio` DOUBLE NOT NULL,
    `Prod_Imagen` VARCHAR(191) NOT NULL,
    `Cat_Id` INTEGER NOT NULL,

    PRIMARY KEY (`Prod_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categoria` (
    `Cat_Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Cat_Nombre` VARCHAR(191) NOT NULL,
    `Cat_Icono` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Cat_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Producto` ADD CONSTRAINT `Producto_Cat_Id_fkey` FOREIGN KEY (`Cat_Id`) REFERENCES `Categoria`(`Cat_Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
