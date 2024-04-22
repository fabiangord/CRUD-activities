-- CreateTable
CREATE TABLE `Activities` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(10) NOT NULL,
    `dates` DATETIME(3) NOT NULL,
    `description` VARCHAR(200) NOT NULL,
    `nameUser` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
