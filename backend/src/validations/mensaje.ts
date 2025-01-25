import { z } from 'zod';

export const MensajeSchema = z.object({
    message: z.string().min(1, "El mensaje es obligatorio"),
    idUserEmisor: z.any(),
    idUserReceptor: z.any(),
});
export const MensajeResponse = MensajeSchema.extend({
    _id: z.any()
});

export type MensajeResponseType = z.infer<typeof MensajeResponse>;
export type IMensaje = z.infer<typeof MensajeSchema>;