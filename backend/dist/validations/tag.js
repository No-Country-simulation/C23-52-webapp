"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllTagOutputSchema = exports.GetTagOutputSchema = exports.UpdateTagInputBodySchema = exports.CreateTagInputBodySchema = exports.TagInputPathParamsSchema = exports.TagUpdateSchema = exports.TagResponseSchema = exports.TagSchema = void 0;
const zod_1 = require("zod");
exports.TagSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "El nombre es obligatorio"),
    description: zod_1.z.string().min(10, "La descripción debe tener al menos 10 caracteres"),
    comicsId: zod_1.z.array(zod_1.z.any()),
});
exports.TagResponseSchema = exports.TagSchema.extend({
    _id: zod_1.z.any(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date()
});
exports.TagUpdateSchema = exports.TagSchema.partial();
exports.TagInputPathParamsSchema = zod_1.z.object({
    id: zod_1.z.string().describe('Identificador del tag'),
});
exports.CreateTagInputBodySchema = exports.TagSchema.describe('Tag');
exports.UpdateTagInputBodySchema = exports.TagUpdateSchema.describe('Tag');
exports.GetTagOutputSchema = exports.TagResponseSchema.describe('Tag');
exports.GetAllTagOutputSchema = zod_1.z.array(exports.TagResponseSchema).describe('Lista de tags');
