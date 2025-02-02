import { z } from 'zod';

export const CategorySchema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    description: z.string().min(10, "La descripción debe tener al menos 10 caracteres"),
});

export const categoryResponseSchema = CategorySchema.extend({
    _id: z.any(),
    createdAt: z.date(),
    updatedAt: z.date()
})

export const CategoryUpdateSchema = CategorySchema.partial();

export const CategoryInputPathParamsSchema = z.object({
    id: z.string().describe('Identificador de la categoría'),
})

export const CreateCategoryInputBodySchema = CategorySchema.describe('Categoría');
export const UpdateCategoryInputBodySchema = CategoryUpdateSchema.describe('Categoría');

export const GetCategoryOutputSchema = categoryResponseSchema.describe('Categoría');
export const GetAllCategoryOutputSchema = z.array(categoryResponseSchema).describe('Lista de categorías');

export const DeleteCategoryOutputSchema = z.object({
    message: z.string().describe('Mensaje de éxito'),
});

export type ICategory = z.infer<typeof CategorySchema>;