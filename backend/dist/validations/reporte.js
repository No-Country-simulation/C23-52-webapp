"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReporteUpdateSchema = exports.ReporteSchema = void 0;
const zod_1 = require("zod");
exports.ReporteSchema = zod_1.z.object({
    typeReport: zod_1.z.string().min(1, "El tipo de reporte es obligatorio"),
    idUser: zod_1.z.any(),
    idCapitulo: zod_1.z.any(),
});
exports.ReporteUpdateSchema = exports.ReporteSchema.partial();
