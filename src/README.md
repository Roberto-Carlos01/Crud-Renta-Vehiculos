# 🚗 Sistema de Gestión de Alquiler de Vehículos

> **Documentación de Funcionalidades del Sistema**

---

## 📌 Funcionalidades Principales

### 1. Historial de Reservas y Alquileres

El sistema permite visualizar un historial detallado de los vehículos alquilados y las reservas realizadas, mostrando la siguiente información estructurada:

- **Datos del Cliente:** Nombre, apellido y Cédula de Identidad (CI).
- **Datos del Vehículo:** Marca, modelo y precio por día.
- **Detalles de la Reserva:** Estado actual, costo total, fecha de inicio y fecha de fin.
- **Cálculo Automático:** El sistema calcula y muestra dinámicamente la **cantidad de días alquilados** en base a la fecha de inicio y fin.

#### 🔄 Flujo de Navegación y Accesibilidad

Para facilitar la administración, cada fila del historial cuenta con acciones interactivas:

- **Botón `Ver Cliente`:** Redirige a una vista de perfil con la información completa del cliente.
- **Botón `Ver Vehículo`:** Redirige a una página detallada con las especificaciones del automóvil.

---

### 2. Gestión Específica por Cliente

- **Historial Individual:** Cada cliente registrado cuenta con un botón exclusivo: **`Mostrar reservaciones`**.
- **Acción:** Redirige a una pantalla dedicada que filtra y lista únicamente las reservaciones asociadas a ese cliente de forma limpia y ordenada.

---

### 3. Control de Reservaciones (Proceso Core)

- **Creación de Reservas:** Formulario intuitivo para registrar nuevos alquileres solicitando los datos clave:
  - _CI del Cliente_ (Asociación)
  - _Placa del Vehículo_ (Asociación)
  - _Fechas y datos complementarios._
- **Modificación de Estados:** Integración con el formulario del CRUD de reservaciones, permitiendo actualizar el estado del alquiler (ej. _Pendiente, Activo, Finalizado, Cancelado_) en tiempo real.

---

## 🛠️ Módulos de Administración (CRUDs Básicos)

El sistema cuenta con paneles de administración tradicionales para la gestión de entidades base:

### 👥 Módulo de Clientes

Permite administrar de forma completa el ciclo de vida de los usuarios en el sistema:

- **C**reate (Registrar nuevo cliente)
- **R**ead (Visualizar lista y perfiles)
- **U**pdate (Modificar datos personales / CI)
- **D**elete (Dar de baja del sistema)

### 🚘 Módulo de Vehículos

Control total sobre la flota de autos disponibles para alquiler:

- **C**reate (Ingresar nuevos vehículos con marca, modelo, placa, etc.)
- **R**ead (Catálogo y disponibilidad)
- **U**pdate (Actualizar precios por día o especificaciones)
- **D**elete (Retirar vehículos de la flota)
