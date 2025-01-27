"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapituloUpdateSchema = exports.CapituloSchema = void 0;
const zod_1 = require("zod");
exports.CapituloSchema = zod_1.z.object({
    idComic: zod_1.z.any(),
    thumbnail: zod_1.z.string().url("Debe ser una URL válida"),
    nameComic: zod_1.z.string().min(1, "El nombre es obligatorio"),
    description: zod_1.z.string().min(10, "La descripción debe tener al menos 10 caracteres"),
    page: zod_1.z.array(zod_1.z.string().url("Debe ser una URL válida")).min(1, "Debe tener al menos una página"),
    views: zod_1.z.number().min(0),
    fechaLanzamiento: zod_1.z.date(),
});
exports.CapituloUpdateSchema = exports.CapituloSchema.partial();
