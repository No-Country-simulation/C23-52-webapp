"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mensaje_controller_1 = require("../controllers/mensaje.controller");
const mensaje_1 = require("../validations/mensaje");
const swaggerHelpers_1 = require("../utils/swaggerHelpers");
const router = (0, express_1.Router)();
// Registrar rutas para mensajes
swaggerHelpers_1.registry.registerPath({
    method: "get",
    path: `/api/mensajes/`,
    tags: ['Mensajes'],
    responses: (0, swaggerHelpers_1.createStandardResponses)((0, swaggerHelpers_1.CreateServerSuccessSchema)(mensaje_1.GetAllMessageOutputSchema), 'Lista de mensajes')
});
swaggerHelpers_1.registry.registerPath({
    method: "get",
    path: `/api/mensajes/{id}`,
    tags: ['Mensajes'],
    request: {
        params: mensaje_1.MensajeInputPathParamsSchema
    },
    responses: (0, swaggerHelpers_1.createStandardResponses)((0, swaggerHelpers_1.CreateServerSuccessSchema)(mensaje_1.GetMessageOutputSchema), 'Mensaje por ID')
});
swaggerHelpers_1.registry.registerPath({
    method: "post",
    path: `/api/mensajes/`,
    tags: ['Mensajes'],
    request: {
        body: {
            content: {
                'application/json': {
                    schema: mensaje_1.CreateMessageInputBodySchema
                }
            }
        }
    },
    responses: (0, swaggerHelpers_1.createStandardResponses)((0, swaggerHelpers_1.CreateServerSuccessSchema)(mensaje_1.GetMessageOutputSchema), 'Mensaje creado')
});
router.get("/", mensaje_controller_1.getMessages);
router.get("/:id", mensaje_controller_1.getMessageById);
router.post("/", mensaje_controller_1.createMessage);
exports.default = router;
