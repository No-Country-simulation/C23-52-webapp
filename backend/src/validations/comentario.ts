import { z } from 'zod';

export const ComentarioSchema = z.object({
    message: z.string().min(1, "El mensaje es obligatorio"),
    idUser: z.any(),
    idCapitulos: z.any(),
});

export const ComentarioUpdateSchema = ComentarioSchema.partial();

export type IComentario = z.infer<typeof ComentarioSchema>;