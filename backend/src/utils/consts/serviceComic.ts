export const ERROR_MESSAGES = {
  COMIC: {
    ID_REQUIRED: "El ID del cómic es requerido.",
    TITLE_REQUIRED: "El título del cómic es requerido.",
    NOT_FOUND: "Cómic no encontrado.",
    DUPLICATE: "El título del cómic ya existe en la base de datos.",
    DATA_INVALID: "Datos del cómic inválidos.",
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
  COMIC: {
    DUPLICATE_KEY_ERROR: "E11000",
  },
};