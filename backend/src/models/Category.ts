import { CallbackError, Schema, model } from 'mongoose';
import { z } from 'zod';

export const CategorySchema = z.object({
    _id: z.string(),
    name: z.string().min(1, "El nombre es obligatorio"),
    description: z.string().min(10, "La descripción debe tener al menos 10 caracteres"),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional()
});

export const CategoryUpdateSchema = CategorySchema.partial();

export type ICategory = z.infer<typeof CategorySchema>;

const categorySchema = new Schema<ICategory>(
    {
        name: { type: String, required: true, unique: true },
        description: { type: String, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

categorySchema.pre('save', async function (next) {
    try {
        CategorySchema.parse(this.toObject());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

categorySchema.pre('findOneAndUpdate', async function (next) {
    try {
        CategoryUpdateSchema.parse(this.getUpdate());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

export const Category = model<ICategory>('Category', categorySchema); 