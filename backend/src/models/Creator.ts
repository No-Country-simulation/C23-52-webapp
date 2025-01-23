import { CallbackError, Schema, model } from 'mongoose';
import { z } from 'zod';

export const CreatorSchema = z.object({
    _id: z.string(),
    idUser: z.any(),
    publishedComic: z.array(z.string().regex(/^[0-9a-fA-F]{24}$/, "ID de comic inválido")),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional()
});

export const CreatorUpdateSchema = CreatorSchema.partial();

export type ICreator = z.infer<typeof CreatorSchema>;

const creatorSchema = new Schema<ICreator>(
    {
        idUser: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
        publishedComic: [{ type: Schema.Types.ObjectId, ref: 'Comic' }]
    },
    {
        timestamps: true,
        versionKey: false
    }
);

creatorSchema.pre('save', async function (next) {
    try {
        CreatorSchema.parse(this.toObject());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

creatorSchema.pre('findOneAndUpdate', async function (next) {
    try {
        CreatorUpdateSchema.parse(this.getUpdate());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

export const Creator = model<ICreator>('Creator', creatorSchema); 