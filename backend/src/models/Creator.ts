import { CallbackError, Schema, model } from 'mongoose';
import { ICreator, CreatorSchema, CreatorUpdateSchema } from '../validations/creator';


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