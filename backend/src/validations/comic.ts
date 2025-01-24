import { z } from 'zod';

export const ComicSchema = z.object({
  title: z.string().min(1, "El título es obligatorio"),
  type: z.array(z.string()).min(1, "Debe tener al menos un tipo"),
  thumbnail: z.string().url("Debe ser una URL válida"),
  description: z.string().min(10, "La descripción debe tener al menos 10 caracteres"),
  creator: z.any(),
  categories: z.array(z.string().regex(/^[0-9a-fA-F]{24}$/, "ID de categoría inválido")),
  isPublic: z.boolean(),
  tagsGenero: z.array(z.string().regex(/^[0-9a-fA-F]{24}$/, "ID de tag inválido")),
  puntuacion: z.number().min(1).max(5),
  views: z.number().min(0),
});

export const ComicUpdateSchema = ComicSchema.partial();

export type IComic = z.infer<typeof ComicSchema>;