"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateSchema = exports.CategorySchema = void 0;
const zod_1 = require("zod");
exports.CategorySchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "El nombre es obligatorio"),
    description: zod_1.z.string().min(10, "La descripción debe tener al menos 10 caracteres"),
});
exports.CategoryUpdateSchema = exports.CategorySchema.partial();
