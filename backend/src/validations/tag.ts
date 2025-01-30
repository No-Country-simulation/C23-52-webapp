import { z } from 'zod';


export const TagSchema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    description: z.string().min(10, "La descripción debe tener al menos 10 caracteres"),
    comicsId: z.array(z.any()),
});

export const TagResponseSchema = TagSchema.extend({
    _id: z.any(),
    createdAt: z.date(),
    updatedAt: z.date()
});

export const TagUpdateSchema = TagSchema.partial();


export const TagInputPathParamsSchema = z.object({
    id: z.string().describe('Identificador del tag'),
});
export const CreateTagInputBodySchema = TagSchema.describe('Tag');
export const UpdateTagInputBodySchema = TagUpdateSchema.describe('Tag');

export const GetTagOutputSchema = TagResponseSchema.describe('Tag');
export const GetAllTagOutputSchema = z.array(TagResponseSchema).describe('Lista de tags');

export const DeleteTagOutputSchema = z.object({
    message: z.string().describe('Mensaje de éxito'),
});

export type TagInput = z.infer<typeof TagSchema>;
export type TagUpdateInput = z.infer<typeof TagUpdateSchema>;
export type TagResponseInput = z.infer<typeof TagResponseSchema>;