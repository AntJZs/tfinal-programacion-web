CREATE TABLE `cliente` ( 
  `ID_Cliente` INT AUTO_INCREMENT NOT NULL,
  `Codigo_cuenta` VARCHAR(6) NOT NULL,
  `Tipo_cuenta` VARCHAR(1) NOT NULL DEFAULT 'A' ,
  `nombres` VARCHAR(60) NOT NULL,
  `apellidos` VARCHAR(60) NOT NULL,
  `correo` VARCHAR(250) NULL DEFAULT NULL ,
  `telefono` VARCHAR(10) NOT NULL,
  `direccion` VARCHAR(100) NULL DEFAULT NULL ,
  `balance` DECIMAL(24,2) NOT NULL DEFAULT 0.00 ,
  `hash` VARCHAR(32) NOT NULL,
   PRIMARY KEY (`ID_Cliente`),
  CONSTRAINT `user_already_taken` UNIQUE (`Codigo_cuenta`),
  CONSTRAINT `mail_already_in_use` UNIQUE (`correo`)
)
ENGINE = InnoDB;
CREATE TABLE `prestamo` ( 
  `ID_Prestamo` INT AUTO_INCREMENT NOT NULL,
  `ID_Cliente` INT NOT NULL,
  `cantidad_total` INT NOT NULL,
  `plazo` DATETIME NOT NULL,
  `estado` INT NOT NULL,
  `fecha_solicitud` DATETIME NOT NULL,
   PRIMARY KEY (`ID_Prestamo`)
)
ENGINE = InnoDB;
CREATE TABLE `reporte` ( 
  `ID_Cliente` INT NOT NULL,
  `hist_ingresos` DECIMAL(32,2) NOT NULL DEFAULT 0.00 ,
  `hist_egresos` DECIMAL(32,2) NOT NULL DEFAULT 0.00 ,
  `deudas` DECIMAL(22,2) NOT NULL DEFAULT 0.00 ,
  `daterange` DATE NOT NULL DEFAULT curdate() ,
   PRIMARY KEY (`ID_Cliente`)
)
ENGINE = InnoDB;
CREATE TABLE `transaccion` ( 
  `ID_transaccion` INT AUTO_INCREMENT NOT NULL,
  `cantidad` DECIMAL(16,2) NOT NULL,
  `ID_emisor` INT NOT NULL,
  `ID_receptor` INT NULL DEFAULT NULL ,
  `Estado` FLOAT NOT NULL DEFAULT 1 ,
  `timestamp` DATETIME NOT NULL DEFAULT current_timestamp() ,
  `tipo` SMALLINT NOT NULL,
   PRIMARY KEY (`ID_transaccion`)
)
ENGINE = InnoDB;
CREATE INDEX `FK_prestamo_ID_Cliente` 
ON `prestamo` (
  `ID_Cliente` ASC
);
CREATE INDEX `FK_transaccion_ID_emisor` 
ON `transaccion` (
  `ID_emisor` ASC
);
SET FOREIGN_KEY_CHECKS = 0;
INSERT INTO `cliente` (`ID_Cliente`, `Codigo_cuenta`, `Tipo_cuenta`, `nombres`, `apellidos`, `correo`, `telefono`, `direccion`, `balance`, `hash`) VALUES (4, 'ANT030', 'A', 'Antonio', 'De León', 'antjz@pm.me', '3004004040', 'Kra 3 # 12-12', '0.00', '63b07e828bf016e976ff95d6ee07a105');
INSERT INTO `cliente` (`ID_Cliente`, `Codigo_cuenta`, `Tipo_cuenta`, `nombres`, `apellidos`, `correo`, `telefono`, `direccion`, `balance`, `hash`) VALUES (7, 'CAR030', 'C', 'Carla', 'Cifuentes', 'ccifu@mail.me', '3005004030', 'Kra 2 # 20-25', '300000.00', '53bccc28a8f8bb3e8ce28c4c4a87a304');
INSERT INTO `cliente` (`ID_Cliente`, `Codigo_cuenta`, `Tipo_cuenta`, `nombres`, `apellidos`, `correo`, `telefono`, `direccion`, `balance`, `hash`) VALUES (10, 'CAR040', 'C', 'Carlos', 'Coronado', 'carlitoscorona@mail.me', '3012003040', 'Kra 1 # 23-45', '0.00', '86c06093b9c9351bcea13ba73dcf9502');
INSERT INTO `reporte` (`ID_Cliente`, `hist_ingresos`, `hist_egresos`, `deudas`, `daterange`) VALUES (4, '0.00', '0.00', '0.00', '2025-10-01');
INSERT INTO `reporte` (`ID_Cliente`, `hist_ingresos`, `hist_egresos`, `deudas`, `daterange`) VALUES (7, '0.00', '0.00', '0.00', '2025-10-01');
INSERT INTO `reporte` (`ID_Cliente`, `hist_ingresos`, `hist_egresos`, `deudas`, `daterange`) VALUES (10, '0.00', '0.00', '0.00', '2025-10-01');
INSERT INTO `transaccion` (`ID_transaccion`, `cantidad`, `ID_emisor`, `ID_receptor`, `Estado`, `timestamp`, `tipo`) VALUES (1, '300000.00', 7, NULL, 1, '2025-10-31 23:12:30', 1);
SET FOREIGN_KEY_CHECKS = 1;
ALTER TABLE `prestamo` ADD CONSTRAINT `FK_prestamo_ID_Cliente` FOREIGN KEY (`ID_Cliente`) REFERENCES `cliente` (`ID_Cliente`) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE `reporte` ADD CONSTRAINT `FK_reporte_ID_Cliente` FOREIGN KEY (`ID_Cliente`) REFERENCES `cliente` (`ID_Cliente`) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE `transaccion` ADD CONSTRAINT `FK_transaccion_ID_emisor` FOREIGN KEY (`ID_emisor`) REFERENCES `cliente` (`ID_Cliente`) ON DELETE RESTRICT ON UPDATE RESTRICT;

