import { CallbackError, Schema, model } from 'mongoose';
import { z } from 'zod';

export const LectorSchema = z.object({
    // _id: z.string(),
    idUser: z.any(),
    credits: z.number().min(0),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional()
});

export const LectorUpdateSchema = LectorSchema.partial();

export type ILector = z.infer<typeof LectorSchema>;

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