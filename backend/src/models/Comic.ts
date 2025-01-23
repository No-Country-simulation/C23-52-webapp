import { CallbackError, Schema, model } from 'mongoose';
import { z } from 'zod';

export const ComicSchema = z.object({
  // _id: z.string(),
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
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
});

export const ComicUpdateSchema = ComicSchema.partial();

export type IComic = z.infer<typeof ComicSchema>;

const comicSchema = new Schema<IComic>(
  {
    title: { type: String, required: true },
    type: [{ type: String, required: true }],
    thumbnail: { type: String, required: true },
    description: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    isPublic: { type: Boolean, default: false },
    tagsGenero: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    puntuacion: { type: Number, min: 1, max: 5, default: 1 },
    views: { type: Number, default: 0 }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

comicSchema.pre('save', async function (next) {
  try {
    ComicSchema.parse(this.toObject());
    next();
  } catch (error: any) {
    next(error as CallbackError);
  }
});

comicSchema.pre('findOneAndUpdate', async function (next) {
  try {
    ComicUpdateSchema.parse(this.getUpdate());
    next();
  } catch (error: any) {
    next(error as CallbackError);
  }
});

export const Comic = model<IComic>('Comic', comicSchema);
