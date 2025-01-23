import { CallbackError, Schema, model } from 'mongoose';
import { z } from 'zod';

export const ReporteSchema = z.object({
    _id: z.string(),
    typeReport: z.string().min(1, "El tipo de reporte es obligatorio"),
    idUser: z.any(),
    idCapitulo: z.any(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional()
});

export const ReporteUpdateSchema = ReporteSchema.partial();

export type IReporte = z.infer<typeof ReporteSchema>;

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