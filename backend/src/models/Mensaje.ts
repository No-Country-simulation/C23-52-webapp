import { CallbackError, Schema, model } from 'mongoose';
import { z } from 'zod';

export const MensajeSchema = z.object({
    _id: z.string(),
    message: z.string().min(1, "El mensaje es obligatorio"),
    idUserEmisor: z.any(),
    idUserReceptor: z.any(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional()
});

export const MensajeUpdateSchema = MensajeSchema.partial();

export type IMensaje = z.infer<typeof MensajeSchema>;

const mensajeSchema = new Schema<IMensaje>(
    {
        message: { type: String, required: true },
        idUserEmisor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        idUserReceptor: { type: Schema.Types.ObjectId, ref: 'User', required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

mensajeSchema.pre('save', async function (next) {
    try {
        MensajeSchema.parse(this.toObject());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

mensajeSchema.pre('findOneAndUpdate', async function (next) {
    try {
        MensajeUpdateSchema.parse(this.getUpdate());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

export const Mensaje = model<IMensaje>('Mensaje', mensajeSchema); 