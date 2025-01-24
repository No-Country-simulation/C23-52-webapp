import { z } from 'zod';

export const TagSchema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    description: z.string().min(10, "La descripción debe tener al menos 10 caracteres"),
    comicsId: z.array(z.string().regex(/^[0-9a-fA-F]{24}$/, "ID de comic inválido")),
});

export const TagUpdateSchema = TagSchema.partial();

export type ITag = z.infer<typeof TagSchema>;