import { z } from 'zod';

export const CategorySchema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    description: z.string().min(10, "La descripción debe tener al menos 10 caracteres"),
});

export const CategoryUpdateSchema = CategorySchema.partial();

export type ICategory = z.infer<typeof CategorySchema>;