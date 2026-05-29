-- =========================================
-- CREAR BASE DE DATOS
-- =========================================

CREATE DATABASE alquiler_vehiculos;
USE alquiler_vehiculos;

-- =========================================
-- TABLA VEHICULO
-- =========================================

CREATE TABLE Vehiculo (
    idvehiculo INT AUTO_INCREMENT PRIMARY KEY,
    
    marca VARCHAR(100) NOT NULL,
    modelo VARCHAR(100) NOT NULL,
    anio YEAR NOT NULL,
    
    precioDia DECIMAL(10,2) NOT NULL,
    
    placa VARCHAR(20) NOT NULL UNIQUE,
    color VARCHAR(50),
    
    foto VARCHAR(255),
    
    descripcion TEXT,
    
    disponible BOOLEAN DEFAULT TRUE
);

-- =========================================
-- TABLA CLIENTE
-- =========================================

CREATE TABLE Cliente (
    idcliente INT AUTO_INCREMENT PRIMARY KEY,
    
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    
    telefono VARCHAR(20),
    
    ci VARCHAR(30) NOT NULL UNIQUE,
    
    licencia VARCHAR(50) NOT NULL UNIQUE
);

-- =========================================
-- TABLA RESERVA
-- =========================================

CREATE TABLE Reserva (
    idreserva INT AUTO_INCREMENT PRIMARY KEY,
    
    fechaIni DATE NOT NULL,
    fechaFin DATE NOT NULL,
    
    total DECIMAL(10,2) NOT NULL,
    
    estado ENUM('pendiente', 'confirmada', 'cancelada', 'finalizada') 
    DEFAULT 'pendiente',
    
    idcliente INT NOT NULL,
    idvehiculo INT NOT NULL,
    
    CONSTRAINT fk_reserva_cliente
        FOREIGN KEY (idcliente)
        REFERENCES Cliente(idcliente)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
        
    CONSTRAINT fk_reserva_vehiculo
        FOREIGN KEY (idvehiculo)
        REFERENCES Vehiculo(idvehiculo)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- =========================================
-- DATOS DE PRUEBA (OPCIONAL)
-- =========================================

INSERT INTO Vehiculo 
(marca, modelo, anio, precioDia, placa, color, foto, descripcion, disponible)
VALUES
('Toyota', 'Corolla', 2022, 45.00, '1234-ABC', 'Blanco', 'toyota.jpg', 'Vehículo económico y cómodo', TRUE),
('Hyundai', 'Tucson', 2023, 80.00, '5678-DEF', 'Negro', 'tucson.jpg', 'SUV moderna y espaciosa', TRUE),
('Nissan', 'Versa', 2021, 40.00, '9012-GHI', 'Rojo', 'versa.jpg', 'Ideal para ciudad', TRUE);

INSERT INTO Cliente
(nombre, apellido, telefono, ci, licencia)
VALUES
('Carlos', 'Mamani', '77777777', '1234567 LP', 'LIC-1001'),
('Ana', 'Quispe', '76543210', '7654321 CB', 'LIC-1002');

INSERT INTO Reserva
(fechaIni, fechaFin, total, estado, idcliente, idvehiculo)
VALUES
('2026-06-01', '2026-06-05', 180.00, 'confirmada', 1, 1),
('2026-06-10', '2026-06-12', 160.00, 'pendiente', 2, 2);