import { z } from 'zod';

export const CapituloSchema = z.object({
    nameChapter: z.string().min(1, "El nombre es obligatorio"),
    idComic: z.any(),
    thumbnail: z.string().url("Debe ser una URL válida"),
    nameComic: z.string().min(1, "El nombre es obligatorio"),
    description: z.string().min(10, "La descripción debe tener al menos 10 caracteres"),
    page: z.array(z.string().url("Debe ser una URL válida")).min(1, "Debe tener al menos una página"),
    views: z.number().min(0),
    fechaLanzamiento: z.date(),
});

export const CapituloUpdateSchema = CapituloSchema.partial();

export type ICapitulo = z.infer<typeof CapituloSchema>;