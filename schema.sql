DROP DATABASE IF EXISTS photos;

CREATE DATABASE photos;

USE photos;

CREATE TABLE `photos`.`business` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `place_name` VARCHAR(45) NULL
);

CREATE TABLE `photos`.`photos` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `ref` VARCHAR(50) NOT NULL,
  `url` VARCHAR(50) NOT NULL,
  `width` INT NOT NULL,
  `height` INT NOT NULL,
  `business_id` INT NOT NULL,
  FOREIGN KEY (`business_id`) REFERENCES business(`id`)
  );

CREATE TABLE `photos`.`reviews` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(50) NOT NULL,
  `avatar` VARCHAR(100) NOT NULL,
  `business_id` INT NOT NULL,
  FOREIGN KEY (`business_id`) REFERENCES business(`id`)
);
