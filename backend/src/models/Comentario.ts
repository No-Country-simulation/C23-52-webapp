import { CallbackError, Schema, model } from 'mongoose';
import { z } from 'zod';

export const ComentarioSchema = z.object({
    // _id: z.string(),
    message: z.string().min(1, "El mensaje es obligatorio"),
    idUser: z.any(),
    idCapitulos: z.any(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional()
});

export const ComentarioUpdateSchema = ComentarioSchema.partial();

export type IComentario = z.infer<typeof ComentarioSchema>;

const comentarioSchema = new Schema<IComentario>(
    {
        message: { type: String, required: true },
        idUser: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        idCapitulos: { type: Schema.Types.ObjectId, ref: 'Capitulo', required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

comentarioSchema.pre('save', async function (next) {
    try {
        ComentarioSchema.parse(this.toObject());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

comentarioSchema.pre('findOneAndUpdate', async function (next) {
    try {
        ComentarioUpdateSchema.parse(this.getUpdate());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

export const Comentario = model<IComentario>('Comentario', comentarioSchema); 