import { CallbackError, Schema, model } from 'mongoose';
import { IMensaje, MensajeSchema, MensajeUpdateSchema } from '../validations/mensaje';


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