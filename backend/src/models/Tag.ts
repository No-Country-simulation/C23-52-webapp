import { CallbackError, Schema, model } from 'mongoose';
import { ITag, TagSchema, TagUpdateSchema } from '../validations/tag';

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