export const ERROR_MESSAGES = {
  CATEGORY: {
    ID_REQUIRED: "El ID de la categoría es requerido.",
    NAME_REQUIRED: "El nombre de la categoría es requerido.",
    NOT_FOUND: "Categoría no encontrada.",
    DUPLICATE: "La categoría ya existe en la base de datos.",
    DATA_INVALID: "Datos de la categoría inválidos.",
  },
  DATABASE: {
    CONNECTION_ERROR: "Error de conexión con la base de datos.",
    TIMEOUT_ERROR: "La consulta demoró demasiado en responder.",
  },
  GENERAL: {
    UNKNOWN_ERROR: "Error interno del servidor.",
  },
};

export const ERROR_IDENTIFIERS = {
  DATABASE: {
    NETWORK_ERROR: "MongoNetworkError",
    TIMEOUT_ERROR: "TimeoutError",
  },
  CATEGORY: {
    DUPLICATE_KEY_ERROR: "E11000",
  },
};
