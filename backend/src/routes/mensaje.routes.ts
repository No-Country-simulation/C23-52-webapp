import { Router } from "express";
import { createMessage, getMessageById, getMessages } from "../controllers/mensaje.controller";
import { CreateMessageInputBodySchema, GetMessageOutputSchema, MensajeInputPathParamsSchema, GetAllMessageOutputSchema } from "../validations/mensaje";
import { CreateServerSuccessSchema, createStandardResponses, registry } from '../utils/swaggerHelpers';

const router = Router();

// Registrar rutas para mensajes
registry.registerPath({
    method: "get",
    path: `/api/mensajes/`,
    tags: ['Mensajes'],
    responses: createStandardResponses(CreateServerSuccessSchema(GetAllMessageOutputSchema), 'Lista de mensajes')
});

registry.registerPath({
    method: "get",
    path: `/api/mensajes/{id}`,
    tags: ['Mensajes'],
    request: {
        params: MensajeInputPathParamsSchema
    },
    responses: createStandardResponses(CreateServerSuccessSchema(GetMessageOutputSchema), 'Mensaje por ID')
});

registry.registerPath({
    method: "post",
    path: `/api/mensajes/`,
    tags: ['Mensajes'],
    request: {
        body: {
            content: {
                'application/json': {
                    schema: CreateMessageInputBodySchema
                }
            }
        }
    },
    responses: createStandardResponses(CreateServerSuccessSchema(GetMessageOutputSchema), 'Mensaje creado')
});

router.get("/", getMessages);
router.get("/:id", getMessageById);
router.post("/", createMessage);

export default router;