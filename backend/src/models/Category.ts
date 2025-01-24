import { CallbackError, Schema, model } from 'mongoose';
import { ICategory, CategorySchema, CategoryUpdateSchema } from '../validations/category';


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