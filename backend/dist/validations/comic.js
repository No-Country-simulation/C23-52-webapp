"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComicUpdateSchema = exports.ComicSchema = void 0;
const zod_1 = require("zod");
exports.ComicSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "El título es obligatorio"),
    type: zod_1.z.array(zod_1.z.string()).min(1, "Debe tener al menos un tipo"),
    thumbnail: zod_1.z.string().url("Debe ser una URL válida"),
    description: zod_1.z.string().min(10, "La descripción debe tener al menos 10 caracteres"),
    creator: zod_1.z.any(),
    categories: zod_1.z.array(zod_1.z.any()),
    isPublic: zod_1.z.boolean(),
    tagsGenero: zod_1.z.array(zod_1.z.any()),
    puntuacion: zod_1.z.number().min(1).max(5),
    views: zod_1.z.number().min(0),
});
exports.ComicUpdateSchema = exports.ComicSchema.partial();
