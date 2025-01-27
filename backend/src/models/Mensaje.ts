import { CallbackError, Schema, model } from 'mongoose';
import { MensajeInput, MensajeSchema } from '../validations/mensaje';


const mensajeSchema = new Schema<MensajeInput>(
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

export const Mensaje = model<MensajeInput>('Mensaje', mensajeSchema); 