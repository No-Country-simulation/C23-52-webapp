import { CallbackError, Schema, model } from 'mongoose';
import { z } from 'zod';

export const CapituloSchema = z.object({
    // _id: z.string(),
    idComic: z.any(),
    thumbnail: z.string().url("Debe ser una URL válida"),
    nameComic: z.string().min(1, "El nombre es obligatorio"),
    description: z.string().min(10, "La descripción debe tener al menos 10 caracteres"),
    page: z.array(z.string().url("Debe ser una URL válida")).min(1, "Debe tener al menos una página"),
    views: z.number().min(0),
    fechaLanzamiento: z.date(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional()
});

export const CapituloUpdateSchema = CapituloSchema.partial();

export type ICapitulo = z.infer<typeof CapituloSchema>;

const capituloSchema = new Schema<ICapitulo>(
    {
        idComic: {type: Schema.Types.ObjectId, ref: 'Comic', required: true},
        thumbnail: {type: String, required: true},
        nameComic: {type: String, required: true},
        description: {type: String, required: true},
        page: [{type: String, required: true }],
        views: { type: Number, default: 0 },
        fechaLanzamiento: { type: Date, required: true, default: Date.now }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

capituloSchema.pre('save', async function (next) {
    try {
        CapituloSchema.parse(this.toObject());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

capituloSchema.pre('findOneAndUpdate', async function (next) {
    try {
        CapituloUpdateSchema.parse(this.getUpdate());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

export const Capitulo = model<ICapitulo>('Capitulo', capituloSchema); 