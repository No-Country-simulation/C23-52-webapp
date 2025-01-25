export const ERROR_MESSAGES = {
  AUTH: {
    TOKEN_NOT_PROVIDED: "Token no proporcionado",
    INVALID_TOKEN: "El token no contiene un correo válido",
  },
  USER: {
    EMAIL_REQUIRED: "El correo electrónico no puede estar vacío",
    USERNAME_REQUIRED: "El nombre de usuario no puede estar vacío",
    USER_NOT_FOUND: "Usuario no encontrado",
    DUPLICATE_EMAIL_ERROR: "Conflicto: correo duplicado en la base de datos",
    INVALID_EMAIL_FORMAT: "El formato del correo electrónico es inválido",
    SESSION_REQUIRED: "Se requiere una sesión para esta acción",
  },
  DATABASE: {
    CONNECTION_ERROR: "Servicio de base de datos no disponible",
  },
  SUCCESS: {
    LOGIN_SUCCESS: "Inicio de sesión exitoso",
    USER_CREATED: "Usuario creado exitosamente",
  },
  GENERAL: {
    UNKNOWN_ERROR: "Error interno del servidor",
  },
};

export const ERROR_IDENTIFIERS = {
  DATABASE: {
    NETWORK_ERROR: "MongoNetworkError",
  },
  USER: {
    DUPLICATE_KEY_ERROR: "E11000",
    INVALID_EMAIL_FORMAT: "Cast to ObjectId failed",
  },
};
