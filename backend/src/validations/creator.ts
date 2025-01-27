import { z } from 'zod';

export const CreatorSchema = z.object({
    idUser: z.any(),
    publishedComic: z.array(z.any()),
});

export const CreatorUpdateSchema = CreatorSchema.partial();

export type ICreator = z.infer<typeof CreatorSchema>;