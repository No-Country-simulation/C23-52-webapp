import { z } from 'zod';

export const ReporteSchema = z.object({
    typeReport: z.string().min(1, "El tipo de reporte es obligatorio"),
    idUser: z.any(),
    idCapitulo: z.any(),
});

export const ReporteUpdateSchema = ReporteSchema.partial();

export type IReporte = z.infer<typeof ReporteSchema>;