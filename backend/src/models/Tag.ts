import { CallbackError, Schema, model } from 'mongoose';
import { z } from 'zod';

export const TagSchema = z.object({
    _id: z.string(),
    name: z.string().min(1, "El nombre es obligatorio"),
    description: z.string().min(10, "La descripción debe tener al menos 10 caracteres"),
    comicsId: z.array(z.string().regex(/^[0-9a-fA-F]{24}$/, "ID de comic inválido")),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional()
});

export const TagUpdateSchema = TagSchema.partial();

export type ITag = z.infer<typeof TagSchema>;

const tagSchema = new Schema<ITag>(
    {
        name: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        comicsId: [{ type: Schema.Types.ObjectId, ref: 'Comic' }]
    },
    {
        timestamps: true,
        versionKey: false
    }
);

tagSchema.pre('save', async function (next) {
    try {
        TagSchema.parse(this.toObject());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

tagSchema.pre('findOneAndUpdate', async function (next) {
    try {
        TagUpdateSchema.parse(this.getUpdate());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

export const Tag = model<ITag>('Tag', tagSchema); 