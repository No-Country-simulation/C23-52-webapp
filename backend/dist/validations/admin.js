"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdateSchema = exports.AdminSchema = void 0;
const zod_1 = require("zod");
exports.AdminSchema = zod_1.z.object({
    idUser: zod_1.z.any(),
});
exports.AdminUpdateSchema = exports.AdminSchema.partial();
