"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComentarioUpdateSchema = exports.ComentarioSchema = void 0;
const zod_1 = require("zod");
exports.ComentarioSchema = zod_1.z.object({
    message: zod_1.z.string().min(1, "El mensaje es obligatorio"),
    idUser: zod_1.z.any(),
    idCapitulos: zod_1.z.any(),
});
exports.ComentarioUpdateSchema = exports.ComentarioSchema.partial();
