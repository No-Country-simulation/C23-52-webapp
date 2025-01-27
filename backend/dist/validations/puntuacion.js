"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PuntuacionUpdateSchema = exports.PuntuacionSchema = void 0;
const zod_1 = require("zod");
exports.PuntuacionSchema = zod_1.z.object({
    puntuacion: zod_1.z.number().min(1).max(5),
    idUser: zod_1.z.any(),
    idComic: zod_1.z.any(),
});
exports.PuntuacionUpdateSchema = exports.PuntuacionSchema.partial();
