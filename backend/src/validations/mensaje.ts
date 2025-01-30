import { z } from 'zod';

export const MensajeSchema = z.object({
    message: z.string().min(1, "El mensaje es obligatorio"),
    idUserEmisor: z.any(),
    idUserReceptor: z.any(),
});
export const MensajeResponseSchema = MensajeSchema.extend({
    _id: z.any(),
    createdAt: z.date(),
    updatedAt: z.date()
});

export const MensajeInputPathParamsSchema = z.object({
    id: z.string().describe('Identificador del mensaje'),
});

export const GetMessageOutputSchema = MensajeResponseSchema.describe('Mensaje');
export const GetAllMessageOutputSchema = z.array(MensajeResponseSchema).describe('Lista de mensajes');

export const CreateMessageInputBodySchema = MensajeSchema.describe('Mensaje');


export type MensajeInput = z.infer<typeof MensajeSchema>;
export type MensajeResponseInput = z.infer<typeof MensajeResponseSchema>;