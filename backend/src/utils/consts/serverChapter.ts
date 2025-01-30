export const ERROR_MESSAGES = {
  CHAPTER: {
    ID_REQUIRED: "El ID del capítulo es requerido",
    NOT_FOUND: "Capítulo no encontrado",
    DUPLICATE_CHAPTER: "Capítulo duplicado: ya existe en la base de datos",
    DATA_INVALID: "Datos del capítulo inválidos",
  },
  DATABASE: {
    CONNECTION_ERROR: "Error de conexión con la base de datos",
    TIMEOUT_ERROR: "La consulta demoró demasiado en responder",
  },
  GENERAL: {
    UNKNOWN_ERROR: "Error interno del servidor",
  },
};

export const ERROR_IDENTIFIERS = {
  DATABASE: {
    NETWORK_ERROR: "MongoNetworkError",
    TIMEOUT_ERROR: "TimeoutError",
  },
};