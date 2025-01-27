import { OpenApiGeneratorV3 } from '@asteasolutions/zod-to-openapi';
import { registry } from '../utils/swaggerHelpers';

// Importar las rutas para asegurarnos que se registren
import '../routes/tag.routes';
import '../routes/mensaje.routes';

const generator = new OpenApiGeneratorV3(registry.definitions);

export const swaggerSpec = generator.generateDocument({
  openapi: '3.0.0',
  info: {
    title: 'API Ruminet',
    version: '1.0.0',
    description: 'Documentación de la API de Ruminet'
  },
  servers: [
  ]
});