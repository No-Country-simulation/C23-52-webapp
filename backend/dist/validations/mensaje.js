"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMessageInputBodySchema = exports.GetAllMessageOutputSchema = exports.GetMessageOutputSchema = exports.MensajeInputPathParamsSchema = exports.MensajeResponseSchema = exports.MensajeSchema = void 0;
const zod_1 = require("zod");
exports.MensajeSchema = zod_1.z.object({
    message: zod_1.z.string().min(1, "El mensaje es obligatorio"),
    idUserEmisor: zod_1.z.any(),
    idUserReceptor: zod_1.z.any(),
});
exports.MensajeResponseSchema = exports.MensajeSchema.extend({
    _id: zod_1.z.any(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date()
});
exports.MensajeInputPathParamsSchema = zod_1.z.object({
    id: zod_1.z.string().describe('Identificador del mensaje'),
});
exports.GetMessageOutputSchema = exports.MensajeResponseSchema.describe('Mensaje');
exports.GetAllMessageOutputSchema = zod_1.z.array(exports.MensajeResponseSchema).describe('Lista de mensajes');
exports.CreateMessageInputBodySchema = exports.MensajeSchema.describe('Mensaje');
