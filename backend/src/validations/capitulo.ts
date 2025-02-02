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

export const CapituloResponseSchema = CapituloSchema.extend({
    _id: z.any(),
    createdAt: z.date(),
    updatedAt: z.date()
})

export const CapituloUpdateSchema = CapituloSchema.partial();

export const CapituloInputPathParamsSchema = z.object({
    id: z.string().describe('Identificador del capitulo'),
});

export const CreateCapituloInputBodySchema = CapituloSchema.describe('Capitulo');
export const UpdateCapituloInputBodySchema = CapituloUpdateSchema.describe('Capitulo');

export const GetCapituloOutputSchema = CapituloResponseSchema.describe('Capitulo');
export const GetAllCapituloOutputSchema = z.array(CapituloResponseSchema).describe('Lista de capitulos');

export const DeleteCapituloOutputSchema = z.object({
    message: z.string().describe('Mensaje de éxito'),
});

export type ICapitulo = z.infer<typeof CapituloSchema>;