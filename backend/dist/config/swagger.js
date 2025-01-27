"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = void 0;
const zod_to_openapi_1 = require("@asteasolutions/zod-to-openapi");
const swaggerHelpers_1 = require("../utils/swaggerHelpers");
// Importar las rutas para asegurarnos que se registren
require("../routes/tag.routes");
require("../routes/mensaje.routes");
const generator = new zod_to_openapi_1.OpenApiGeneratorV3(swaggerHelpers_1.registry.definitions);
exports.swaggerSpec = generator.generateDocument({
    openapi: '3.0.0',
    info: {
        title: 'API Ruminet',
        version: '1.0.0',
        description: 'Documentación de la API de Ruminet'
    },
    servers: []
});
