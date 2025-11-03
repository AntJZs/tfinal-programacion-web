-- This is the database structure, will grow depending on how much I work on the schema

CREATE TABLE [cliente] ( 
  [ID_Cliente] INTEGER PRIMARY KEY AUTOINCREMENT,
  [Codigo_cuenta] VARCHAR(6) NOT NULL,
  [Tipo_Cuenta] VARCHAR(1) NOT NULL DEFAULT 'A' ,
  [nombre] VARCHAR(60) NOT NULL,
  [apellidos] VARCHAR(60) NOT NULL,
  [correo] VARCHAR(250) NULL,
  [telefono] VARCHAR(10) NOT NULL,
  [direccion] VARCHAR(100) NULL,
  [balance] NUMERIC(24,2) NOT NULL DEFAULT 0 
);

CREATE TABLE [transaccion] ( 
-- Different
)

CREATE TABLE [prestamo] ( 
  [ID_usuario] INT NOT NULL,
  [cantidad_total] INT NULL,
  [plazo] DATETIME NULL,
  [estado] INT NOT NULL,
  [fecha_solicitud] DATETIME NOT NULL,
  [duracion_prestamo] AS DATEDIFF(fecha_solicitud, plazo),
   PRIMARY KEY ([id])
);

CREATE TABLE [reporte] ( 
  [ID_usuario] INT NOT NULL,
  [hist_ingresos] NUMERIC(32,2) NOT NULL DEFAULT 0,
  [hist_egresos] NUMERIC(32,2) NOT NULL DEFAULT 0 ,
  [deudas] NUMERIC(22,2) NOT NULL DEFAULT 0 ,
   PRIMARY KEY ([ID_usuario])
);

