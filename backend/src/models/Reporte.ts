import { CallbackError, Schema, model } from 'mongoose';
import { IReporte, ReporteSchema, ReporteUpdateSchema } from '../validations/reporte';

const reporteSchema = new Schema<IReporte>(
    {
        typeReport: { type: String, required: true },
        idUser: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        idCapitulo: { type: Schema.Types.ObjectId, ref: 'Capitulo', required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

reporteSchema.pre('save', async function (next) {
    try {
        ReporteSchema.parse(this.toObject());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

reporteSchema.pre('findOneAndUpdate', async function (next) {
    try {
        ReporteUpdateSchema.parse(this.getUpdate());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

export const Reporte = model<IReporte>('Reporte', reporteSchema); 