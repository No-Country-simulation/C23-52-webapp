import { CallbackError, Schema, model } from 'mongoose';
import { IPuntuacion, PuntuacionSchema, PuntuacionUpdateSchema } from '../validations/puntuacion';


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