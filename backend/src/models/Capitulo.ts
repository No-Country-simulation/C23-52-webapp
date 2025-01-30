import { CallbackError, Schema, model } from 'mongoose';
import { ICapitulo, CapituloSchema, CapituloUpdateSchema } from '../validations/capitulo';


const capituloSchema = new Schema<ICapitulo>(
    {
        nameChapter: { type: String, required: true, unique: true },
        idComic: {type: Schema.Types.ObjectId, ref: 'Comic', required: true},
        thumbnail: {type: String, required: true},
        nameComic: {type: String, required: true},
        description: {type: String, required: true},
        page: [{type: String, required: true }],
        views: { type: Number, default: 0 },
        fechaLanzamiento: { type: Date, required: true, default: Date.now }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

capituloSchema.pre('save', async function (next) {
    try {
        CapituloSchema.parse(this.toObject());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

capituloSchema.pre('findOneAndUpdate', async function (next) {
    try {
        CapituloUpdateSchema.parse(this.getUpdate());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

export const Capitulo = model<ICapitulo>('Capitulo', capituloSchema); 