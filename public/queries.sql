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
CREATE TABLE `prestamo` ( 
  `ID_Prestamo` INT AUTO_INCREMENT NOT NULL,
  `ID_Cliente` INT NOT NULL,
  `cantidad_total` INT NOT NULL,
  `plazo` DATETIME NOT NULL,
  `estado` INT NOT NULL DEFAULT 0 ,
  `fecha_solicitud` DATETIME NOT NULL DEFAULT utc_date() ,
  `nombre` VARCHAR(100) NULL DEFAULT NULL ,
   PRIMARY KEY (`ID_Prestamo`)
)
ENGINE = InnoDB;
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
CREATE TABLE `reporte` ( 
  `ID_Cliente` INT NOT NULL,
  `hist_ingresos` DECIMAL(32,2) NOT NULL DEFAULT 0.00 ,
  `hist_egresos` DECIMAL(32,2) NOT NULL DEFAULT 0.00 ,
  `deudas` DECIMAL(22,2) NOT NULL DEFAULT 0.00 ,
  `daterange` DATE NOT NULL DEFAULT curdate() 
)
ENGINE = InnoDB;
ALTER TABLE `transaccion` ADD CONSTRAINT `FK_transaccion_ID_emisor` FOREIGN KEY (`ID_emisor`) REFERENCES `cliente` (`ID_Cliente`) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE `prestamo` ADD CONSTRAINT `FK_prestamo_ID_Cliente` FOREIGN KEY (`ID_Cliente`) REFERENCES `cliente` (`ID_Cliente`) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE `reporte` ADD CONSTRAINT `FK_reporte_ID_Cliente` FOREIGN KEY (`ID_Cliente`) REFERENCES `cliente` (`ID_Cliente`) ON DELETE RESTRICT ON UPDATE RESTRICT;
