import { z } from 'zod';

export const PuntuacionSchema = z.object({
    puntuacion: z.number().min(1).max(5),
    idUser: z.any(),
    idComic: z.any(),
});

export const PuntuacionUpdateSchema = PuntuacionSchema.partial();

export type IPuntuacion = z.infer<typeof PuntuacionSchema>;