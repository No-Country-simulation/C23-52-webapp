import { CallbackError, Schema, model } from 'mongoose';
import { ILector, LectorSchema, LectorUpdateSchema } from '../validations/lector';

const lectorSchema = new Schema<ILector>(
    {
        idUser: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
        credits: { type: Number, default: 0, min: 0 }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

lectorSchema.pre('save', async function (next) {
    try {
        LectorSchema.parse(this.toObject());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

lectorSchema.pre('findOneAndUpdate', async function (next) {
    try {
        LectorUpdateSchema.parse(this.getUpdate());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

export const Lector = model<ILector>('Lector', lectorSchema); 