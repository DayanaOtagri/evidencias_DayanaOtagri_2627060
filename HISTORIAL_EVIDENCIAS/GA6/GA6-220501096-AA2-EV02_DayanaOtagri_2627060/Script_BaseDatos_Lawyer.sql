CREATE DATABASE LawyerDB;
USE LawyerDB; 

CREATE TABLE Contacto (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Apellido VARCHAR(50) NOT NULL,
    Telefono VARCHAR(15),
    Correo VARCHAR(100) NOT NULL,
    InformacionCaso TEXT,
    CHECK (LENGTH(Telefono) <= 15),
    CONSTRAINT valid_email CHECK (REGEXP_LIKE(Correo, '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$'))
);


-- Resgistros 
INSERT INTO Contacto (Nombre, Apellido, Telefono, Correo, InformacionCaso)
VALUES
    ('Juan', 'Pérez', '555-123-4567', 'juan@example.com', 'Consulta sobre un caso de divorcio.'),
    ('Ana', 'González', '555-987-6543', 'ana@example.com', 'Necesito asesoramiento legal para un contrato.'),
    ('Pedro', 'Ramírez', '555-789-1234', 'pedro@example.com', 'Defensa legal en un caso penal.'),
    ('Maria', 'Sánchez', '555-456-7890', 'maria@example.com', 'Custodia de hijos en un divorcio.'),
    ('Carlos', 'López', '555-234-5678', 'carlos@example.com', 'Asesoramiento en un asunto de propiedad.'),
    ('Laura', 'Torres', '555-876-5432', 'laura@example.com', 'Representación legal en un litigio comercial.'),
    ('Luis', 'Martínez', '555-345-6789', 'luis@example.com', 'Defensa en un caso de accidente de tráfico.'),
    ('Isabel', 'Díaz', '555-654-3210', 'isabel@example.com', 'Asistencia legal en un tema de herencia.'),
    ('Andrés', 'Hernández', '555-432-1098', 'andres@example.com', 'Consulta sobre derechos de empleados.'),
    ('Sofía', 'Ortega', '555-210-9876', 'sofia@example.com', 'Representación en un caso de negligencia médica.');


-- Consultas sobre la base de datos creada con difetentes clausulas 

-- Selecciona todo lo que se encuantra en Contactos y los ordena por el apellido de forma ascendente 
SELECT * FROM Contacto
ORDER BY Apellido ASC;

-- Selecciona todo lo que se encuentra en Contactos donde el nombre sean "Juan", "Laura" e "Isabel"
SELECT * FROM Contacto
WHERE Nombre IN ('Juan', 'Laura', 'Isabel');

-- Expresion Regexp sobre correo 
SELECT * FROM Contacto
WHERE Correo REGEXP '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$';

-- Seleccióna apellido y los cuenta (estableciendo el alias como "Cantidad") y los ordena por apelldio  
SELECT Apellido, COUNT(*) AS Cantidad
FROM Contacto
GROUP BY Apellido;

-- Selecciona los registros con información de casos relacionados con divorcio:
SELECT *
FROM Contacto
WHERE InformacionCaso LIKE '%divorcio%';
