import { CallbackError, Schema, model } from 'mongoose';
import { z } from 'zod';

export const AdminSchema = z.object({
    _id: z.string(),
    idUser: z.any(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional()
});

export const AdminUpdateSchema = AdminSchema.partial();

export type IAdmin = z.infer<typeof AdminSchema>;

const adminSchema = new Schema<IAdmin>(
    {
        idUser: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

adminSchema.pre('save', async function (next) {
    try {
        AdminSchema.parse(this.toObject());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

adminSchema.pre('findOneAndUpdate', async function (next) {
    try {
        AdminUpdateSchema.parse(this.getUpdate());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

export const Admin = model<IAdmin>('Admin', adminSchema); 