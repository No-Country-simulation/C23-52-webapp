import { z } from 'zod';

export const CreatorSchema = z.object({
    idUser: z.any(),
    publishedComic: z.array(z.string().regex(/^[0-9a-fA-F]{24}$/, "ID de comic inválido")),
});

export const CreatorUpdateSchema = CreatorSchema.partial();

export type ICreator = z.infer<typeof CreatorSchema>;