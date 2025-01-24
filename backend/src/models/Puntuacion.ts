import { CallbackError, Schema, model } from 'mongoose';
import { z } from 'zod';

export const PuntuacionSchema = z.object({
    // _id: z.string(),
    puntuacion: z.number().min(1).max(5),
    idUser: z.any(),
    idComic: z.any(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional()
});

export const PuntuacionUpdateSchema = PuntuacionSchema.partial();

export type IPuntuacion = z.infer<typeof PuntuacionSchema>;

const puntuacionSchema = new Schema<IPuntuacion>(
    {
        puntuacion: { type: Number, required: true, min: 1, max: 5 },
        idUser: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        idComic: { type: Schema.Types.ObjectId, ref: 'Comic', required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

puntuacionSchema.pre('save', async function (next) {
    try {
        PuntuacionSchema.parse(this.toObject());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

puntuacionSchema.pre('findOneAndUpdate', async function (next) {
    try {
        PuntuacionUpdateSchema.parse(this.getUpdate());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

export const Puntuacion = model<IPuntuacion>('Puntuacion', puntuacionSchema); 