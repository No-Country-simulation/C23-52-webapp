import { CallbackError, Schema, model } from 'mongoose';
import { IComentario, ComentarioSchema, ComentarioUpdateSchema } from '../validations/comentario';


const comentarioSchema = new Schema<IComentario>(
    {
        message: { type: String, required: true },
        idUser: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        idCapitulos: { type: Schema.Types.ObjectId, ref: 'Capitulo', required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

comentarioSchema.pre('save', async function (next) {
    try {
        ComentarioSchema.parse(this.toObject());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

comentarioSchema.pre('findOneAndUpdate', async function (next) {
    try {
        ComentarioUpdateSchema.parse(this.getUpdate());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

export const Comentario = model<IComentario>('Comentario', comentarioSchema); 